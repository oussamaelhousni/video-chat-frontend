import { useRef } from "react";
import { useWavesurfer } from "@wavesurfer/react";

const Recorder = () => {
  const containerRef = useRef();

  const { wavesurfer, isReady, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    url: "/my-server/audio.ogg",
    waveColor: "purple",
    height: "100",
  });

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };

  return (
    <>
      <div ref={containerRef} />

      <button onClick={onPlayPause}>{isPlaying ? "Pause" : "Play"}</button>
    </>
  );
};

export default Recorder;
