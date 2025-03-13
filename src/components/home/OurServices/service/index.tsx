import Image from "next/image";
import { motion } from "motion/react";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "@/utils/motion";
import TitleSection from "@/components/title";
import PrimaryBtn from "@/components/buttons/primaryBtn";
import Link from "next/link";

export type serviceProps = {
  title: string;
  desc: string;
  goTo: string;
  image: string;
  reverse?: boolean;
  imageClassName?: string;
};

export default function ServiceItem({
  desc,
  goTo,
  image,
  title,
  reverse,
  imageClassName = "",
}: serviceProps) {
  const imgOrder = reverse ? "order-2" : "order-1";
  const contentOrder = reverse ? "order-1" : "order-2";
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-10"
    >
      <div className={`${imgOrder} ${imageClassName} `}>
        <motion.div
          variants={zoomIn(0, 1)}
          className={` relative before:absolute before:inset-0 before:border-primary before:border-2 before:rounded-lg  w-fit before:z-[-1] before:translate-y-4 before:translate-x-4 `}
        >
          <Image
            src={image}
            alt="service"
            width={500}
            height={500}
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
      <div className={`${contentOrder} grid gap-5 place-content-start`}>
        <TitleSection
          title={title}
          fontSize="text-6xl"
          className="text-stroke"
        />

        <motion.p variants={fadeIn(0)} className="mt-5 text-gray">
          {desc}
        </motion.p>

        <motion.div variants={slideIn("left", "tween", 1, 1)} className="w-fit">
          <Link href={goTo}>
            <PrimaryBtn id="about">Read More</PrimaryBtn>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
