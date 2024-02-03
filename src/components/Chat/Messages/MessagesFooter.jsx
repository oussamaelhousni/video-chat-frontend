import { useState, useEffect, useRef } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { FaRegFaceLaugh } from "react-icons/fa6";
import { BiSolidSend } from "react-icons/bi";
import { BiSolidMicrophone } from "react-icons/bi";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../../app/slices/currentConversationSlice";

const MessagesFooter = ({ scrollToBottom }) => {
  const dispatch = useDispatch();
  const { receiver, conversationId } = useSelector(
    (state) => state.currentConversation
  );

  const { token } = useSelector((state) => state.auth);
  const [textMessage, setTextMessage] = useState("");

  const handleOnChange = (e) => {
    e.target.value;
    setTextMessage(e.target.value);
  };

  const onSendMessage = () => {
    console.log("in onSend", {
      text: textMessage,
      receiver: receiver._id,
      conversationId,
    });
    if (!textMessage?.trim()) return;
    dispatch(
      sendMessage({ text: textMessage, receiver: receiver._id, conversationId })
    );
    setTextMessage("");
    setTimeout(() => {
      scrollToBottom();
    }, 300);
  };

  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        const formData = new FormData();
        formData.append("audio", audioBlob, "audio.wav");

        // Send audio data to the API
        //sendAudioToAPI(formData);
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
      setRecording(false);
      const audioBlob = new Blob(audioChunksRef.current, {
        type: "audio/wav",
      });
      sendAudioToApi(audioBlob);
    }
  };

  const sendAudioToApi = async (audioBlob) => {
    try {
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };

      const form = new FormData();
      form.append("receiver", receiver._id);
      form.append("type", "audio");
      form.append("audio", audioBlob, "audio.wav");
      const response = await axios.post(
        "http://localhost:8080/api/v1/conversations/" +
          conversationId +
          "/messages",
        form,
        config
      );

      const data = response.data;
      console.log("audio stored", data);
    } catch (error) {
      console.log("error in sending audio");
    }
  };

  return (
    <div className="absolute h-[5rem] w-full bg-[#1B202D] bottom-0 left-0 flex items-center px-4 gap-4">
      <div className="text-xl text-white flex gap-4">
        <HiOutlinePlus className="cursor-pointer" />
        <FaRegFaceLaugh className="cursor-pointer" />
      </div>

      <div className="h-[2rem] relative bg-[#3D4354] m-4 rounded-md w-full">
        <input
          type="text"
          className="absolute top-0 left-0 w-full h-full bg-transparent focus:outline-none font-ubuntu ps-4 text-white text-sm"
          placeholder="send a message"
          value={textMessage}
          onChange={handleOnChange}
        />
      </div>
      <div className="text-xl text-white">
        {recording && (
          <BiSolidMicrophone
            className="cursor-pointer text-red-500"
            onClick={() => stopRecording()}
          />
        )}
      </div>
      <div className="text-xl text-white" onClick={() => startRecording()}>
        <BiSolidMicrophone className="cursor-pointer" />
      </div>
      <div className="text-xl text-white" onClick={onSendMessage}>
        <BiSolidSend className="cursor-pointer" />
      </div>
    </div>
  );
};

export default MessagesFooter;
