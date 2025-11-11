import PrimaryBtn from "@/components/buttons/primaryBtn";
import { InputTextarea } from "@/components/common/textareaInput";
import { InputText } from "@/components/common/TextInput";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { object, string } from "yup";
import emailjs from "@emailjs/browser";
import { errorAlert, successAlert } from "@/utils/alert";

export default function MassageForm() {
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const { handleBlur, handleChange, values, touched, errors, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      validationSchema: object({
        name: string().required("Name is required"),
        email: string().email("Invalid email").required("Email is required"),
        message: string()
          .required("Message is required")
          .min(10, "The message must be at least 10 characters"),
      }),
      onSubmit: async (values) => {
        setLoading(true);
        // const { email, message } = values;

        try {
          await emailjs.sendForm(
            "service_4ln6yl5",
            "template_hr668qe",
            form.current!,
            "Fm3JYo6_U475aI-uz"
          );

          successAlert("Contact us", "Your message has been sent successfully");
          setLoading(false);
        } catch (e) {
          errorAlert(
            "Contact us",
            "Something went wrong, please try again later"
          );
          setLoading(false);
          console.log(e);
        }
        console.log(values);
      },
    });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-primary p-6 py-10 "
      ref={form}
    >
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
      <InputTextarea
        name="message"
        placeholder="Enter your message"
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={(touched.message && errors.message) || ""}
        value={values.message}
        rows={4}
      />
      <PrimaryBtn
        id="contact"
        fullSized
        color="white"
        type="submit"
        isProcessing={loading}
      >
        Send Message
      </PrimaryBtn>
    </form>
  );
}
