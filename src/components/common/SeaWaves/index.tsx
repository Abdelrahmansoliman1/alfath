export default function SeaWaves({ className = "" }: { className?: string }) {
  return (
    <video
      src="/videos/sea-waves.mp4"
      autoPlay
      loop
      muted
      controls={false}
      playsInline
      className={`w-full h-full object-cover ${className}`}
      poster="/videos/0005.jpg"
    />
  );
}
