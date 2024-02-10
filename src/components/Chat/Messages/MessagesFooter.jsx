import { useState, useEffect, useRef, memo } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { FaRegFaceLaugh } from "react-icons/fa6";
import { BiSolidSend } from "react-icons/bi";
import { BiSolidMicrophone } from "react-icons/bi";
import { FaStop } from "react-icons/fa";
import { MdStop } from "react-icons/md";
import { HiStop } from "react-icons/hi2";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaImage } from "react-icons/fa";

import { FaFile } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa6";
import { RiFileVideoFill } from "react-icons/ri";

// my Components
import PreviewModal from "../../PreviewModal";

import axios from "axios";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  abortMessage,
  pushNewMessage,
  sendMessage,
  switchWithRealMsg,
} from "../../../app/slices/currentConversationSlice";
import { addAbort } from "../../../app/slices/abortControllerSlice";

const MessagesFooter = ({ scrollToBottom }) => {
  const dispatch = useDispatch();
  const { receiver, conversationId } = useSelector(
    (state) => state.currentConversation
  );
  const { token } = useSelector((state) => state.auth);
  const [textMessage, setTextMessage] = useState("");
  const [recording, setRecording] = useState(false);
  const [audioStartAt, setAudioStartAt] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // upload file menu
  const [showFileMenu, setShowFileMenu] = useState(true);
  const fileMenuRef = useRef(null);

  // handle files
  const imageRef = useRef(null);
  const docRef = useRef(null);
  const videoRef = useRef(null);
  const imgSrc = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // check if we clicked outside
      if (fileMenuRef.current && !fileMenuRef.current.contains(event.target)) {
        setShowFileMenu(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

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
    audioChunksRef.current = [];
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      setAudioStartAt(new Date());
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size >= 0) {
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
      mediaRecorderRef.current?.removeEventListener(
        "dataavailable",
        (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        }
      );
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

      const message = response.data.data.message;
      dispatch(pushNewMessage(message));
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

  const onUpload = async (e, type) => {
    const id = v4();
    const aborter = new AbortController();

    dispatch(addAbort({ id, aborter }));
    const uploadMessage = {
      id,
      type: type,
      isMediaUpload: true, // this boolean is for identifying that this message is just uploading placeholder and will be replaced by real message
      url: window.URL.createObjectURL(e.target.files[0]),
      isLoading: true,
      error: "",
      isCanceled: false,
      aborter,
    };
    dispatch(pushNewMessage(uploadMessage));

    try {
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
        signal: aborter.signal,
      };
      const form = new FormData();
      for (let i = 0; i < e.target.files.length; i++) {
        form.append(type, e.target.files[i]);
      }
      form.append("type", type);
      form.append("receiver", receiver._id);
      imageRef.current.value = "";
      videoRef.current.value = "";
      const response = await axios.post(
        `${
          import.meta.env.VITE_URL
        }/api/v1/conversations/${conversationId}/messages`,
        form,
        config
      );
      const data = response.data;
      console.log("data", { id, message: data.data.message });
      dispatch(switchWithRealMsg({ id, message: data.data.message }));
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("request si aborted");
      }
    }
  };

  return (
    <div className="absolute h-[5rem] w-full bg-[#1B202D] bottom-0 left-0 flex items-center px-4 gap-4">
      <div className="w-0 h-0 overflow-hidden">
        <input
          type="file"
          id="imageInput"
          ref={imageRef}
          onChange={(e) => {
            return onUpload(e, "image");
          }}
        />
        <input
          type="file"
          id="videoInput"
          ref={videoRef}
          onChange={(e) => {
            return onUpload(e, "video");
          }}
        />
        <input type="file" id="docInput" onChange={console.log} ref={docRef} />
      </div>

      {!recording && (
        <>
          <div className="text-xl text-white flex gap-4 relative">
            {showFileMenu && (
              <div className="absolute bottom-[2rem] rounded-md bg-secondary flex justify-start items-center flex-col overflow-hidden shadow-slate-700 shadow-sm p-[4px]">
                <button
                  className="flex items-center gap-2 text-sm min-w-[10rem] w-[10rem] p-2  hover:bg-gray-700 cursor-pointer rounded-lg"
                  onClick={() => docRef.current?.click()}
                >
                  <FaFile className="inline-flex me-2" />{" "}
                  <span>Upload file</span>
                </button>
                <button
                  className="flex items-center gap-2 text-sm min-w-[10rem] w-[10rem] p-2  hover:bg-gray-700 cursor-pointer rounded-lg"
                  onClick={() => {
                    console.log("input clicked", imageRef.current);
                    imageRef.current?.click();
                  }}
                >
                  <FaFileImage className="inline-flex me-2" />{" "}
                  <span>Upload image</span>
                </button>
                <button
                  className="flex items-center gap-2 text-sm min-w-[10rem] w-[10rem] p-2  hover:bg-gray-700 cursor-pointer rounded-lg"
                  onClick={() => videoRef.current?.click()}
                >
                  <RiFileVideoFill className="inline-flex me-2" />{" "}
                  <span>Upload video</span>
                </button>
              </div>
            )}
            <button ref={fileMenuRef}>
              <HiOutlinePlus
                className="cursor-pointer"
                onClick={() => {
                  setShowFileMenu((prev) => !prev);
                }}
              />
            </button>
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

export default memo(MessagesFooter);
