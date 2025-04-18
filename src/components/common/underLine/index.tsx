export default function UnderLine({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative">
      {children}
      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary"></span>
    </span>
  );
}
