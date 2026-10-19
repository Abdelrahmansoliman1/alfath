import { FaMapMarkedAlt } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineStarOutline } from "react-icons/md";

export const heroSlider = {
  showSlider: false,
  sliderContent: [
    {
      img: "/services/shipping_agency.png",
      title: "Shipping Agency",
      description:
        "We offer a wide range of shipping services to meet your needs.",
    },
    {
      img: "/services/stevedoring_services.png",
      title: "Shipping Agency",
      description:
        "We offer a wide range of shipping services to meet your needs.",
    },
    {
      img: "/services/shipping_agency.png",
      title: "Shipping Agency",
      description:
        "We offer a wide range of shipping services to meet your needs.",
    },
    {
      img: "/services/stevedoring_services.png",
      title: "Shipping Agency",
      description:
        "We offer a wide range of shipping services to meet your needs.",
    },
  ],
};

export const heroSection = {
  title: "New Wave Of Egyptian Shipping Industry",
};

export const aboutSection = {
  title: "Welcome to Alfath for Shipping Agencies",
  whoWeAre: "Who We are",
  textList: [
    "Established in 2024, Al-Fath for Shipping Agencies has swiftly emerged as a leading force in the maritime and logistics industry. ",
    "With a commitment to excellence and efficiency, the company provides top-tier shipping, stevedoring, warehousing, and storage solutions, ensuring seamless operations for businesses worldwide.",
    "Backed by a highly experienced team, state-of-the-art facilities, and a strategic vision for growth, Al-Fath aims to redefine industry standards, offering innovative and reliable logistics solutions tailored to meet the evolving needs of global trade.",
  ],
};

export const serviceSection = {
  title: "Our Services",
  button: "View Services",
};

export const whyChooseUsSection = {
  title: "Why Choose Us",
  timelineList: [
    {
      icon: FaMapMarkedAlt,
      title: "Strategic Port Access",
      description:
        "We operate through key international ports, ensuring efficient routes between Egypt and major global hubs.",
    },
    {
      icon: BsClockHistory,
      title: "Reliable & Timely Delivery",
      description: (
        <span>
          We&apos;re committed to delivering your cargo on time, every
          time&#9866;backed by a professional logistics team and trusted
          partners.
        </span>
      ),
    },
    {
      icon: FiSettings,
      title: "Customized Shipping Solutions",
      description: (
        <span>
          Whether it&apos;s dry bulk, general cargo, or containers&#9866;we
          tailor our services to fit your specific needs with precision and
          flexibility.
        </span>
      ),
    },
    {
      icon: AiOutlineMessage,
      title: "Transparent Communication",
      description: (
        <span>
          We maintain full transparency and real&#9866;time updates throughout
          the shipping journey, ensuring peace of mind for every client.
        </span>
      ),
    },
    {
      icon: MdOutlineStarOutline,
      title: "Commitment to Excellence",
      description: (
        <span>
          Our operations are built on trust, safety, and continuous
          improvement&#9866;delivering value through top-tier service and
          industry compliance.
        </span>
      ),
    },
  ],
};
