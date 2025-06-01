import PrimaryBtn from "@/components/buttons/primaryBtn";
import { InputTextarea } from "@/components/common/textareaInput";
import { InputText } from "@/components/common/TextInput";
import Email from "@/components/contactUs/MassageForm/email";
import { render } from "@react-email/components";
import { useFormik } from "formik";
import { useState } from "react";
import { object, string } from "yup";

export default function RequestQuoteForm() {
  const [loading, setLoading] = useState(false);
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
        const { email, message } = values;
        try {
          // await resend.emails.send({
          //   from: `${name} <${email}>`,
          //   to: "alimohamed9788@gmail.com",
          //   subject: "hello world",
          //   react: <Email massage={message} />,
          // });
          const emailHtml = await render(<Email massage={message} />);
          //   plunk.emails.send({
          //     from: `${email}`,
          //     to: "alimohamed9788@gmail.com",
          //     subject: "Hello world",
          //     body: emailHtml,
          //   });
          setLoading(false);
        } catch (e) {
          setLoading(false);
          console.log(e);
        }
        console.log(values);
      },
    });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full rounded-2xl max-w-[400px] gap-4 bg-primary p-6 py-10 mx-auto "
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
