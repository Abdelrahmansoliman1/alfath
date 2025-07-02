import { Button, ButtonProps, Spinner } from "flowbite-react";

const customTheme = {
  base: "group flex items-stretch items-center justify-center p-0 text-center font-semibold relative focus:z-10 focus:outline-none transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] disabled:opacity-70 w-fit disabled:pointer-events-none border  min-w-[150px] shadow-lg cursor-pointer h-11",

  color: {
    primary: "bg-primary hover:bg-primary/20  border-primary  text-white",
    white:
      "bg-white hover:bg-transparent hover:text-white border-white  text-primary",
    whiteOutLine:
      "bg-transparent hover:bg-white hover:text-primary border-white  text-white",
    primaryOutLine:
      "bg-transparent hover:bg-primary hover:text-white border-primary  text-primary",
    primaryCancel:
      "bg-white  border-primary text-primary opacity-50 hover:opacity-100",
    grayOutLine:
      "bg-transparent  border-dark-gray text-dark-gray opacity-50 hover:opacity-100 shadow-sm",
    success:
      "bg-success-color hover:bg-success-color/10 hover:text-success-color border-success-color text-white",
    successOutLine:
      "hover:bg-success-color bg-success-color/10 text-success-color border-success-color  hover:text-white",
    failure:
      "bg-error-color hover:bg-error-color/10 hover:text-error-color border-error-color  text-white",
    failureOutLine:
      "hover:bg-error-color bg-error-color/10 text-error-color border-error-color  hover:text-white",
    transparent: "text-primary border-0",
  },
  disabled: "cursor-wait opacity-50 !bg-gray pointer-events-none",
  spinnerSlot: "absolute top-0 flex h-full items-center main-spinner-custom",
  pill: {
    off: "rounded-full",
    on: "rounded-full",
  },
  size: {
    md: "text-base px-4 py-2",
    lg: "text-2xl px-5 py-2.5",
  },
};

export default function PrimaryBtn({
  children,
  color = "primary",
  id,
  isProcessing,
  ...props
}: ButtonProps & {
  color?: colorTypes;
  pluse?: boolean;
  id: string;
}) {
  return (
    <Button
      theme={customTheme}
      {...props}
      color={color}
      disabled={props.disabled}
      className={`${props.className || ""} ${
        isProcessing ? "cursor-wait pointer-events-none " : ""
      }`}
      id={id}
    >
      {isProcessing ? (
        <Spinner
          aria-label="Left-aligned spinner example"
          className={"fill-primary"}
        />
      ) : (
        <span className="flex items-center gap-2 capitalize">{children}</span>
      )}
    </Button>
  );
}
