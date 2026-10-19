import Link from "next/link";
import { FiMap, FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
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
            className="hover:text-secondary hover:underline transition-colors"
          >
            Info@alfathshipping.com
          </Link>
        ),
      },
      // {
      //   text: (
      //     <Link
      //       href="mailto:Marketing@alfathshipping.com"
      //       className="hover:text-secondary hover:underline transition-colors"
      //     >
      //       Marketing@alfathshipping.com
      //     </Link>
      //   ),
      // },
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
              className="hover:text-secondary hover:underline transition-colors"
            >
              +201070754291
            </Link>
            ,
            <Link
              href="tel:+201070754292"
              className="hover:text-secondary hover:underline transition-colors"
            >
              +201070754292
            </Link>
          </span>
        ),
      },
    ],
  },
];

export const footer = {
  aboutUs: `Established in 2024, Al-Fath for Shipping Agencies has swiftly
                emerged as a leading force in the maritime and logistics
                industry.`,
  copyright: "Al-Fath for Shipping Agencies",
};
