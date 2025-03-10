import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "motion/react";

type Props = {
  title: string;
  fontSize?: string;
  className?: string;
  lineBg?: string;
};

export default function TitleSection({
  title,
  fontSize = "text-3xl",
  className,
  lineBg = "bg-primary",
}: Props) {
  return (
    <div className="grid">
      <motion.h2
        variants={textContainer}
        className={`${fontSize} ${className} font-bold text-white`}
      >
        {Array.from(title).map((letter, index) => (
          <motion.span variants={textVariant2} key={index}>
            {letter === " " ? "\u00a0" : letter}

            {/* {title} */}
          </motion.span>
        ))}
      </motion.h2>
      <div className={`w-10 h-[2px] mb-1 ${lineBg}`} />
      <div className={`w-15 h-[2px] ${lineBg}`} />
    </div>
  );
}
