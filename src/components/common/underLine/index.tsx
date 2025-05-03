export default function UnderLine({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative ${className}`}>
      {children}
      <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary max-w-12"></span>
    </span>
  );
}
