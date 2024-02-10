// 3rd party
import React, { useRef, useEffect } from "react";
import { AudioPlayer } from "react-audio-player-component";
import MessageMediaUploader from "./MessageMediaUploader";

const Message = ({ message, messageBefore, userId }) => {
  /* const audio = useRef(null);
  if (message.audio) {
    const audioData = atob(message.audio);
    const audioArray = new Uint8Array(audioData.length);

    for (let i = 0; i < audioData.length; i++) {
      audioArray[i] = audioData.charCodeAt(i);
    }

    const audioBlob = new Blob([audioArray], { type: "audio/wav" });
    audio.current = URL.createObjectURL(audioBlob);
  } */
  if (message.isMediaUpload) {
    return <MessageMediaUploader message={message} />;
  }
  return (
    <>
      {message.type === "text" && (
        <div
          className={`pt-4 pb-6 ps-4 pe-8 bg-[#2d3436] w-fit min-w-[20rem] min-h-[2rem] rounded-md flex flex-col relative ${
            message.sender == userId ? "self-end" : ""
          } flex-shrink-0`}
        >
          <p className="text-gray-200">{message.text}</p>
          <span className="text-[12px] absolute right-2 bottom-1 text-gray-200">
            {`${new Date(message.createdAt).getHours()}:${new Date(
              message.createdAt
            ).getMinutes()}`}
          </span>
          {!messageBefore && (
            <div
              className={`h-[20px] w-[30px] skew-x-[${
                message.sender === userId ? "-" : ""
              }45deg] bg-[#2d3436] rounded-sm absolute top-0 ${
                message.sender == userId ? "right" : "left"
              }-[-1px]`}
            ></div>
          )}
        </div>
      )}

      {message.type === "audio" && (
        <div
          className={` ps-4 pe-4 bg-[#2d3436] w-fit min-w-[20rem] min-h-[2rem] rounded-md flex flex-col relative ${
            message.sender == userId ? "self-end" : ""
          } flex-shrink-0`}
        >
          <AudioPlayer
            src={"http://localhost:8080/audios/" + message.url}
            minimal={true}
            width={350}
            trackHeight={50}
            barWidth={1}
            gap={4}
            visualise={true}
            backgroundColor="#2d3436"
            barColor="white"
            barPlayedColor="#2d3436"
            skipDuration={2}
            showLoopOption={true}
            showVolumeControl={true}
            className="text-white"
            // seekBarColor="purple"
            volumeControlColor="blue"
            // hideSeekBar={true}
            // hideTrackKnobWhenPlaying={true}
          />
          <span className="text-[12px] absolute right-2 bottom-1 text-gray-200">
            {`${new Date(message.createdAt).getHours()}:${new Date(
              message.createdAt
            ).getMinutes()}`}
          </span>
        </div>
      )}

      {message?.type === "image" && (
        <div className="bg-gray-500 min-w-[10rem] min-h-[15rem] max-h-[20rem] max-w-[20rem] rounded-md p-1 relative self-end">
          <img
            src={`${import.meta.env.VITE_URL}/${message.type}s/` + message?.url}
            className="block w-full h-full object-cover"
            alt="upload image"
          />
          <span className="text-[12px] absolute right-2 bottom-1 text-gray-200 bg-black py-[1px] px-[4px] bg-opacity-70 rounded-full">
            {`${new Date(message.createdAt).getHours()}:${new Date(
              message.createdAt
            ).getMinutes()}`}
          </span>
        </div>
      )}
      {message?.type === "video" && (
        <div className="bg-gray-500 min-w-[10rem] aspect-video max-w-[80%] rounded-md p-1 relative self-end">
          <video
            src={`${import.meta.env.VITE_URL}/${message.type}s/` + message?.url}
            className="block w-full h-full object-cover"
            alt="upload image"
            controls
          />
          <span className="text-[12px] absolute right-2 bottom-1 text-gray-200 bg-black py-[1px] px-[4px] bg-opacity-70 rounded-full">
            {`${new Date(message.createdAt).getHours()}:${new Date(
              message.createdAt
            ).getMinutes()}`}
          </span>
        </div>
      )}
    </>
  );
};

export default Message;
