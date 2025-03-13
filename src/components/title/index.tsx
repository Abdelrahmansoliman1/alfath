import { lineScaleX, textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "motion/react";

type Props = {
  title: string;
  fontSize?: string;
  className?: string;
  lineBg?: string;
  delay?: number;
};

export default function TitleSection({
  title,
  fontSize = "text-3xl",
  className,
  lineBg = "bg-primary",
  delay = 0,
}: Props) {
  return (
    <div className="grid grid-cols-1">
      <motion.h2
        variants={textContainer(delay)}
        className={`${fontSize} ${className} font-bold text-white flex flex-wrap gap-2`}
      >
        {title.split(" ").map((word, index) => (
          <span key={index}>
            {Array.from(word).map((letter, index) => (
              <motion.span variants={textVariant2} key={index}>
                {letter === " " ? "\u00a0" : letter}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.h2>
      <motion.div
        {...lineScaleX}
        className={`w-10 h-[2px] mb-1 mt-2 origin-left ${lineBg}`}
      />
      <motion.div
        {...lineScaleX}
        className={`w-15 h-[2px] origin-left ${lineBg}`}
      />
    </div>
  );
}
