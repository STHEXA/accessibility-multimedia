export default function VideoControls({
  isPlaying,
  currentTime,
  onPlayPause,
  onStop,
  onRwd,
  onFwd,
}) {
  return (
    <div className="controls mt-3 flex items-center gap-2">
      <button
        onClick={onPlayPause}
        className="playpause text-white bg-black px-2 py-1.5 rounded-2xl text-[16px] hover:opacity-70"
      >
        {isPlaying ? "一時停止" : "再生"}
      </button>
      <button
        onClick={onStop}
        className="stop text-white bg-black px-2 py-1.5 rounded-2xl text-[16px] hover:opacity-70"
      >
        停止
      </button>
      <button
        onClick={onRwd}
        className="rwd text-white bg-black px-2 py-1.5 rounded-2xl text-[16px] hover:opacity-70"
      >
        巻き戻し
      </button>
      <button
        onClick={onFwd}
        className="fwd text-white bg-black px-2 py-1.5 rounded-2xl text-[16px] hover:opacity-70"
      >
        早送り
      </button>
      <div className="time">{currentTime}</div>
    </div>
  );
}
