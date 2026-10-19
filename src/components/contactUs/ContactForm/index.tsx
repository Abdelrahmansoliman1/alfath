"use client";

import { contactUsList } from "@/constant/footer";
import MassageForm from "../MassageForm";

export default function ContactForm() {
  // const addressRef = useRef<HTMLDivElement>(null);
  // const formRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const setMarginFn = () => {
  //     if (addressRef.current && formRef.current) {
  //       const formHeight = formRef.current.getBoundingClientRect().height;
  //       const addressHeight = addressRef.current.getBoundingClientRect().height;
  //       setMargin(window.innerWidth < 769 ? 0 : formHeight - addressHeight);
  //     }
  //   };
  //   setMarginFn();
  //   window.addEventListener("resize", setMarginFn);
  //   return () => {
  //     window.removeEventListener("resize", setMarginFn);
  //   };
  // }, []);

  return (
    <div className="relative z-10 mx-auto grid grid-cols-1 w-full overflow-hidden rounded-3xl shadow-lg">
      <div className="bg-surface p-6 md:p-8">
        {contactUsList.map((item, index) => (
          <div key={index} className="flex items-start gap-3 mb-5 last:mb-0">
            <span className="text-lg p-2.5 bg-secondary text-white rounded-xl">
              {item.icon}
            </span>
            <div className="grid">
              <span className="text-lg font-bold text-primary">
                {item.title}
              </span>
              {item.text.map((text, index) => (
                <ul className="grid" key={index}>
                  <li className="flex items-start flex-col gap-1 text-sm ">
                    <span className="text-gray [&>span>a]:hover:text-secondary [&>a]:hover:text-secondary">
                      {text.text}
                    </span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <MassageForm />
      </div>
    </div>
  );
}
