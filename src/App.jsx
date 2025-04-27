import { useState, useRef } from "react";
import VideoPlayer from "./components/VideoPlayer";
import VideoControls from "./components/VideoControls";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00");
  const videoRef = useRef(null);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const handleRwd = () => {
    videoRef.current.currentTime -= 3;
  };

  const handleFwd = () => {
    videoRef.current.currentTime += 3;
    if (
      videoRef.current.currentTime >= videoRef.current.duration ||
      videoRef.current.paused
    ) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(formatTime(videoRef.current.currentTime));
  };

  return (
    <>
      <p>Reactでの実装</p>
      <section className="player">
        <VideoPlayer videoRef={videoRef} onTimeUpdate={handleTimeUpdate} />
        <VideoControls
          isPlaying={isPlaying}
          currentTime={currentTime}
          onPlayPause={handlePlayPause}
          onStop={handleStop}
          onRwd={handleRwd}
          onFwd={handleFwd}
        />
      </section>
    </>
  );
}

export default App;
