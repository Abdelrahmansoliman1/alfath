import { BsFillInfoCircleFill } from "react-icons/bs";

export default function AlertError({
  text,
  arrow = true,
  position = "absolute",
  className = "",
}: {
  text: React.ReactNode;
  position?: "absolute" | "relative" | "static";
  arrow?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${position} bottom-0 left-0 z-20 flex gap-2  translate-y-full items-center rounded-lg bg-[#FFDFDEF2] p-2 text-xs text-dark ${className}`}
    >
      {arrow && (
        <span className="absolute left-8 top-0 -translate-y-full border-[10px] border-transparent border-b-[#FFDFDEF2]" />
      )}
      <BsFillInfoCircleFill className="text-red-600" />

      {text}
    </div>
  );
}
