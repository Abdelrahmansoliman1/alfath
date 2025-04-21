import Image from "next/image";
import SocialMedia from "../SocialMedia";
import { navItems } from "../Navbar/constant";
import Link from "next/link";
import { FiChevronsRight, FiMap, FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const componyLinks = navItems.filter((item) => !item.list);
const companyServices = navItems.find((item) => item.list);

const FooterLinks = [
  {
    title: "Company Links",
    links: componyLinks,
  },
  {
    title: "Company Services",
    links: companyServices?.list || [],
  },
];

export const contactUsList: {
  icon: React.ReactNode;
  title: string;
  text: {
    title?: string;
    text: string | React.ReactNode;
  }[];
}[] = [
  {
    icon: <FiMap />,
    title: "Address",
    text: [
      {
        // title: "Head Office :",
        text: "- 5th Floor At 57 Fouad St. - Raml Station - Alexandria, Egypt",
      },
      {
        // title: "Sokhna Office :",
        text: "- Office 5 At 2nd Floor Sky Mall Beside Sokhna Port Terminal Gate",
      },
    ],
  },
  {
    icon: <MdOutlineMail />,
    title: "Emails",
    text: [
      {
        text: (
          <Link
            href="mailto:Info@alfathshipping.com"
            className="hover:text-white hover:underline"
          >
            Info@alfathshipping.com
          </Link>
        ),
      },
      {
        text: (
          <Link
            href="mailto:Marketing@alfathshipping.com"
            className="hover:text-white hover:underline"
          >
            Marketing@alfathshipping.com
          </Link>
        ),
      },
    ],
  },
  {
    icon: <FiPhone />,
    title: "Phones",
    text: [
      {
        text: (
          <span>
            <Link
              href="tel:+201070754291"
              className="hover:text-white hover:underline"
            >
              +201070754291
            </Link>
            ,
            <Link
              href="tel:+201070754292"
              className="hover:text-white hover:underline"
            >
              +201070754292
            </Link>
          </span>
        ),
      },
    ],
  },
];
export default function Footer() {
  return (
    <div className="z-10 relative">
      <div className="bg-primary py-10 pt-20 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="grid gap-4 place-content-start">
              <Image
                src="/logo-lg.png"
                width={250}
                height={85}
                className="mb-6"
                alt="alfath Logo"
              />
              <p className="">
                Established in 2024, Al-Fath for Shipping Agencies has swiftly
                emerged as a leading force in the maritime and logistics
                industry.
              </p>
              <div className="flex gap-4">
                <SocialMedia dir="row" />
              </div>
            </div>

            {FooterLinks.map((item, index) => (
              <div key={index}>
                <h3 className="mb-4 font-bold">{item.title}</h3>
                <ul className="grid gap-2">
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.path}
                        className="hover:underline hover:text-white flex gap-2 items-center text-white/80 w-fit capitalize"
                      >
                        <FiChevronsRight />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="mb-4 font-bold">Contact Us</h3>
              {contactUsList.map((item, index) => (
                <div key={index} className="flex items-start gap-2 mb-4">
                  <span className="text-xl p-2 bg-white text-primary rounded-full">
                    {item.icon}
                  </span>
                  <div className="grid">
                    <span className="text-xl font-bold">{item.title}</span>
                    {item.text.map((text, index) => (
                      <ul className="grid" key={index}>
                        <li className="flex items-start flex-col gap-1 text-sm ">
                          {text.title && (
                            <span className="text-nowrap">{text.title}</span>
                          )}
                          <span className="text-white/80">{text.text}</span>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="border-t border-white mt-10 pt-10 text-center">
            &copy; {new Date().getFullYear()} Al-Fath for Shipping Agencies
          </p>
        </div>
      </div>
    </div>
  );
}
