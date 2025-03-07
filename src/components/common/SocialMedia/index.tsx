import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
} from "react-icons/gr";

const soicalMediaList = [
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
];

type Props = {
  className?: string;
  dir: "row" | "col";
};

export default function SocialMedia({ className = "", dir = "row" }: Props) {
  return (
    <div className={`p-2 flex gap-4 ${className} flex-${dir}`}>
      {soicalMediaList.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-primary border border-primary p-2 rounded-full hover:bg-primary hover:text-white"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
