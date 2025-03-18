"use client";

import PrimaryBtn from "@/components/buttons/primaryBtn";
import { contactUsList } from "@/components/common/Footer";
import { InputTextarea } from "@/components/common/textareaInput";
import { InputText } from "@/components/common/TextInput";
import { useEffect, useRef, useState } from "react";

export default function ContactForm() {
  const addressRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [margin, setMargin] = useState(0);

  useEffect(() => {
    const setMarginFn = () => {
      if (addressRef.current && formRef.current) {
        const formHeight = formRef.current.getBoundingClientRect().height;
        const addressHeight = addressRef.current.getBoundingClientRect().height;
        // if (typeof window !== "undefined") {
        //   setMargin(window.innerWidth < 769 ? 0 : formHeight - addressHeight);
        // } else {
        setMargin(formHeight - addressHeight);
        // }
      }
    };
    setMarginFn();
    window.addEventListener("resize", setMarginFn);
    return () => {
      window.removeEventListener("resize", setMarginFn);
    };
  }, []);

  return (
    <div
      className="pt-[50px] w-full relative z-10"
      style={{ marginBottom: `-${margin}px` }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="bg-white p-6 grow" ref={addressRef}>
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
        </div>

        <div className="bg-primary p-6 py-10 grow" ref={formRef}>
          <form action="" className="flex flex-col gap-4">
            <InputText label="" name="name" placeholder="Enter your name" />
            <InputText
              label=""
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <InputTextarea
              name="message"
              placeholder="Enter your message"
              rows={4}
            />
            <PrimaryBtn id="contact" fullSized color="white">
              Send Message
            </PrimaryBtn>
          </form>
        </div>
      </div>
    </div>
  );
}
