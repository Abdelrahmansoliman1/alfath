import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
} from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";

export const socialMediaList = [
  {
    icon: <GrFacebookOption />,
    link: "https://www.facebook.com/share/1B4sD7v9zR/?mibextid=wwXIfr",
  },
  {
    icon: <GrInstagram />,
    link: "https://www.instagram.com/alfathshipping?igsh=YTYxNWh6Nzd3ejQ5",
  },
  {
    icon: <GrLinkedinOption />,
    link: "https://www.linkedin.com/company/alfathshipping/",
  },
  {
    icon: <ImWhatsapp />,
    link: "https://api.whatsapp.com/send?phone=201094024596",
  },
];

type Props = {
  className?: string;
  dir: "row" | "col";
};

export default function SocialMedia({ className = "", dir = "row" }: Props) {
  return (
    <div
      className={`p-2 flex gap-3 ${className} flex-${dir} shadow-lg bg-white/90 backdrop-blur rounded-full`}
    >
      {socialMediaList.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-primary border border-border p-2 rounded-full transition-colors duration-300 hover:bg-secondary hover:border-secondary hover:text-white"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
