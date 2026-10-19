import Image from "next/image";
import SocialMedia from "../SocialMedia";
import { navItems } from "../Navbar/constant";
import Link from "next/link";
import { FiChevronsRight } from "react-icons/fi";
import { contactUsList, footer } from "@/constant/footer";

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

export default function Footer() {
  return (
    <div className="z-10 relative">
      <div className="relative bg-primary py-10 pt-20 text-white overflow-hidden">
        <span className="absolute inset-x-0 top-0 h-1 bg-secondary" />
        <span className="pointer-events-none absolute -top-40 -right-40 size-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="grid gap-5 place-content-start">
              <Image
                src="/logo-lg.png"
                width={250}
                height={85}
                className="mb-2"
                alt="alfath Logo"
              />
              <p className="text-white/60 leading-relaxed">{footer.aboutUs}</p>
              <div className="flex gap-4">
                <SocialMedia dir="row" />
              </div>
            </div>

            {FooterLinks.map((item, index) => (
              <div key={index}>
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-secondary">
                  {item.title}
                </h3>
                <ul className="grid gap-3">
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.path}
                        className="hover:text-secondary transition-colors flex gap-2 items-center text-white/70 w-fit capitalize"
                      >
                        <FiChevronsRight className="text-secondary" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-secondary">
                Contact Us
              </h3>
              {contactUsList.map((item, index) => (
                <div key={index} className="flex items-start gap-3 mb-5">
                  <span className="text-lg p-2.5 bg-secondary text-white rounded-xl">
                    {item.icon}
                  </span>
                  <div className="grid">
                    <span className="text-base font-semibold">{item.title}</span>
                    {item.text.map((text, index) => (
                      <ul className="grid" key={index}>
                        <li className="flex items-start flex-col gap-1 text-sm ">
                          {text.title && (
                            <span className="text-nowrap">{text.title}</span>
                          )}
                          <span className="text-white/60">{text.text}</span>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/50">
            &copy; {new Date().getFullYear()} {footer.copyright}
          </p>
        </div>
      </div>
    </div>
  );
}
