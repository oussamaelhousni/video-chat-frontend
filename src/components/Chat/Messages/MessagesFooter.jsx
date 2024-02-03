import { useState, useEffect, useRef } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { FaRegFaceLaugh } from "react-icons/fa6";
import { BiSolidSend } from "react-icons/bi";
import { BiSolidMicrophone } from "react-icons/bi";
import { FaStop } from "react-icons/fa";
import { MdStop } from "react-icons/md";
import { HiStop } from "react-icons/hi2";
import { RiSendPlaneFill } from "react-icons/ri";

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
  const [audioStartAt, setAudioStartAt] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  function countTimeFromSpecificDate() {
    if (!currentTime || !audioStartAt) return "00:00";
    const timeDifference = Math.abs(currentTime - audioStartAt) / 1000; // in seconds

    const minutes = Math.floor(timeDifference / 60);
    const remainingSeconds = Math.floor(timeDifference % 60);

    return `${minutes > 10 ? minutes : "0" + minutes}:${
      remainingSeconds > 10 ? remainingSeconds : "0" + remainingSeconds
    }`;
  }
  useEffect(() => {
    let timeId;
    if (recording) {
      timeId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
    }
    return () => {
      clearInterval(timeId);
    };
  }, [recording]);

  const startRecording = async () => {
    setAudioStartAt(new Date());
    audioChunksRef.current = [];
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
        sendAudioToApi(audioBlob);
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
    }
  };

  const cancelRecording = () => {
    console.log("cancel recording");
    setRecording(false);
    mediaRecorderRef.current = null;
    audioChunksRef.current = [];
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

      console.log("sended data", audioBlob);
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
    } finally {
      setRecording(false);
      audioChunksRef.current = [];
      mediaRecorderRef.current = null;
      setCurrentTime(null);
      setAudioStartAt(null);
    }
  };

  return (
    <div className="absolute h-[5rem] w-full bg-[#1B202D] bottom-0 left-0 flex items-center px-4 gap-4">
      {!recording && (
        <>
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
        </>
      )}

      {recording && (
        <div className="flex justify-between w-full items-center">
          <div className="text-xl text-white flex items-center gap-2">
            <BiSolidMicrophone className="cursor-pointer text-red-500 text-[1.5rem] animate-pulse animate-once animate-duration-[50ms] animate-delay-0 animate-ease-in-out" />
            <span className="text-sm">{countTimeFromSpecificDate()}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="text-lg text-white p-1 rounded-md "
              onClick={() => cancelRecording()}
            >
              <HiStop className="text-red-500 text-2xl" />
            </button>
            <button
              className="text-lg text-white p-1 rounded-md"
              onClick={() => stopRecording()}
            >
              <BiSolidSend className="cursor-pointer text-xl text-green-500" />
            </button>
          </div>
        </div>
      )}

      {!recording && (
        <>
          <div className="text-xl text-white" onClick={() => startRecording()}>
            <BiSolidMicrophone className="cursor-pointer" />
          </div>
          <div className="text-xl text-white" onClick={onSendMessage}>
            <BiSolidSend className="cursor-pointer" />
          </div>
        </>
      )}
    </div>
  );
};

export default MessagesFooter;
