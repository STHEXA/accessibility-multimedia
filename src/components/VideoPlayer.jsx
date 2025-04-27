export default function VideoPlayer({ videoRef, onTimeUpdate }) {
  return (
    <video ref={videoRef} onTimeUpdate={onTimeUpdate} className="w-[600px]">
      <source src="/src/assets/dog2.mp4" type="video/mp4" />
      <source src="/src/assets/dog2.webm" type="video/webm" />
      <p>
        このブラウザーは HTML の映像に対応していません。 代わりの
        <a href="rabbit320.mp4">映像へのリンク</a>はこちら。
      </p>
    </video>
  );
}
