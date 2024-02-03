// 3rd party
import React, { useRef, useEffect } from "react";
import { AudioPlayer } from "react-audio-player-component";

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
        <>
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

            // seekBarColor="purple"
            // volumeControlColor="blue"
            // hideSeekBar={true}
            // hideTrackKnobWhenPlaying={true}
          />
        </>
      )}
    </>
  );
};

export default Message;
