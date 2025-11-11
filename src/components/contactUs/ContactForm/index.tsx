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
    <div className="relative z-10 mx-auto grid grid-cols-1">
      <div className="bg-[#f5f5f5] p-6">
        {contactUsList.map((item, index) => (
          <div key={index} className="flex items-start gap-2 mb-4">
            <span className="text-xl p-2 bg-primary text-white rounded-full">
              {item.icon}
            </span>
            <div className="grid">
              <span className="text-xl font-bold text-primary">
                {item.title}
              </span>
              {item.text.map((text, index) => (
                <ul className="grid" key={index}>
                  <li className="flex items-start flex-col gap-1 text-sm ">
                    <span className="text-primary/80 [&>span>a]:hover:text-primary [&>a]:hover:text-primary">
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
