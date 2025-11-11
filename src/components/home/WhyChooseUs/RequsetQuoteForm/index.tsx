import PrimaryBtn from "@/components/buttons/primaryBtn";
import SelectInput from "@/components/common/SelectInput";
import { InputTextarea } from "@/components/common/textareaInput";
import { InputText } from "@/components/common/TextInput";
import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { object, string } from "yup";
import {
  cargoOptions,
  containerTypeOptions,
  formKeys,
  ports,
  services,
} from "./constant";
import { useSearchParams } from "next/navigation";
import TitleSection from "@/components/title";
import UnderLine from "@/components/common/underLine";
import emailjs from "@emailjs/browser";
import { errorAlert, successAlert } from "@/utils/alert";

export default function RequestQuoteForm() {
  const searchparams = useSearchParams();
  const section = searchparams.get("section");
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const {
    handleBlur,
    handleChange,
    values,
    touched,
    errors,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: formKeys,
    validationSchema: object({
      name: string().required("Name is required"),
      email: string().email("Invalid email").required("Email is required"),
      message: string()
        .required("Message is required")
        .min(10, "The message must be at least 10 characters"),
      phone: string()
        .required("Phone number is required")
        .min(10, "The phone number must be at least 10 characters")
        .max(11, "The phone number must be at most 10 characters"),
      services: string().required("Services is required"),
      pol: string().required("POL is required"),
      pod: string().required("POD is required"),
      cargo: string().required("Cargo is required"),
      containerType: string().required("Container Type is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      // const { email, message } = values;
      try {
        // await resend.emails.send({
        //   from: `${name} <${email}>`,
        //   to: "alimohamed9788@gmail.com",
        //   subject: "hello world",
        //   react: <Email massage={message} />,
        // });
        // const emailHtml = await render(<Email massage={message} />);
        //   plunk.emails.send({
        //     from: `${email}`,
        //     to: "alimohamed9788@gmail.com",
        //     subject: "Hello world",
        //     body: emailHtml,
        //   });

        await emailjs.sendForm(
          "service_4ln6yl5",
          "template_99iv9rq",
          form.current!,
          "Fm3JYo6_U475aI-uz"
        );

        setLoading(false);
        successAlert(
          "Request quote",
          "Your message has been sent successfully"
        );
      } catch (e) {
        setLoading(false);
        console.log(e);
        errorAlert(
          "Request quote",
          "Something went wrong, please try again later"
        );
      }
      console.log(values);
    },
  });

  useEffect(() => {
    if (section) {
      const form = document.getElementById(
        "requestQuoteForm"
      ) as HTMLFormElement;

      window.scrollTo({
        top: form.offsetTop,
        behavior: "smooth",
      });

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete("section");
      window.history.replaceState({}, document.title, newUrl.toString());
    }
  }, [section]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full rounded-2xl max-w-[500px] gap-4 bg-[#f5f5f5] p-6 py-10 mx-auto "
      id="requestQuoteForm"
      ref={form}
    >
      <TitleSection className="mb-8">
        <UnderLine>REQUEST A QUOTE</UnderLine>
      </TitleSection>
      <div className="grid gap-2 grid-cols-1 lg:grid-cols-2 ">
        <SelectInput
          error={(touched.services && errors.services) || ""}
          label=""
          name="services"
          options={services}
          value={values.services}
          setValue={setFieldValue}
          placeholder="select services"
        />
        <SelectInput
          error={(touched.pol && errors.pol) || ""}
          label=""
          name="pol"
          options={ports}
          value={values.pol}
          setValue={setFieldValue}
          placeholder="select POL"
        />
      </div>
      <div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
        <SelectInput
          error={(touched.pod && errors.pod) || ""}
          label=""
          name="pod"
          options={ports}
          value={values.pod}
          setValue={setFieldValue}
          placeholder="select pod"
        />
        <SelectInput
          error={(touched.cargo && errors.cargo) || ""}
          label=""
          name="cargo"
          options={cargoOptions}
          value={values.cargo}
          setValue={setFieldValue}
          placeholder="select cargo"
        />
      </div>
      <SelectInput
        error={(touched.containerType && errors.containerType) || ""}
        label=""
        name="containerType"
        options={containerTypeOptions}
        value={values.containerType}
        setValue={setFieldValue}
        placeholder="select container Type"
      />
      <InputText
        label=""
        name="name"
        placeholder="Enter your name"
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={(touched.name && errors.name) || ""}
        value={values.name}
      />
      <InputText
        label=""
        type="email"
        name="email"
        placeholder="Enter your email"
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={(touched.email && errors.email) || ""}
        value={values.email}
      />
      <InputText
        label=""
        type="phone"
        name="phone"
        placeholder="Enter your phone"
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={(touched.phone && errors.phone) || ""}
        value={values.phone}
      />
      <InputTextarea
        name="message"
        placeholder="Enter your message"
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={(touched.message && errors.message) || ""}
        value={values.message}
        rows={4}
      />
      <PrimaryBtn id="contact" fullSized type="submit" isProcessing={loading}>
        Send
      </PrimaryBtn>
    </form>
  );
}
