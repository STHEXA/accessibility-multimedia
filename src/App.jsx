import { useState, useRef } from "react";

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
    videoRef.current.currentTime = Math.max(
      0,
      videoRef.current.currentTime - 10
    );
  };

  const handleFwd = () => {
    videoRef.current.currentTime = Math.min(
      videoRef.current.duration,
      videoRef.current.currentTime + 10
    );
  };

  const handleTimeUpdate = () => {
    setCurrentTime(formatTime(videoRef.current.currentTime));
  };

  return (
    <>
      <p>Reactでの実装</p>
      <section className="player">
        <video
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
          className="w-[600px]"
        >
          <source src="/src/assets/dog2.mp4" type="video/mp4" />
          <source src="/src/assets/dog2.webm" type="video/webm" />
          <p>
            このブラウザーは HTML の映像に対応していません。 代わりの
            <a href="rabbit320.mp4">映像へのリンク</a>はこちら。
          </p>
        </video>

        <div className="controls mt-3 flex items-center gap-2">
          <button
            onClick={handlePlayPause}
            className="playpause text-white bg-black px-2 py-1.5 rounded-2xl text-[16px] hover:opacity-70"
          >
            {isPlaying ? "一時停止" : "再生"}
          </button>
          <button
            onClick={handleStop}
            className="stop text-white bg-black px-2 py-1.5 rounded-2xl text-[16px] hover:opacity-70"
          >
            停止
          </button>
          <button
            onClick={handleRwd}
            className="rwd text-white bg-black px-2 py-1.5 rounded-2xl text-[16px] hover:opacity-70"
          >
            巻き戻し
          </button>
          <button
            onClick={handleFwd}
            className="fwd text-white bg-black px-2 py-1.5 rounded-2xl text-[16px] hover:opacity-70"
          >
            早送り
          </button>
          <div className="time">{currentTime}</div>
        </div>
      </section>
    </>
  );
}

export default App;
