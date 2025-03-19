"use client";

import { Label, Textarea, TextareaProps } from "flowbite-react";
import { forwardRef } from "react";
import AlertError from "../AlertError";
const themeInput = {
  base: "block w-full rounded-lg border border-primary text-sm disabled:cursor-not-allowed disabled:opacity-50",
  colors: {
    gray: "border-primary bg-white text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 ",
    info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 ",
    failure:
      "border-red-500 bg-white text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500",
    warning:
      "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 ",
    success:
      "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 ",
  },
  withShadow: {
    on: "shadow-sm dark:shadow-sm-light",
    off: "",
  },
};

function InputTextRef(
  {
    label,
    className,
    helperText,
    labelOptional,
    ...props
  }: TextareaProps &
    React.RefAttributes<HTMLTextAreaElement> & {
      label?: string;
      labelOptional?: string;
      rightElement?: React.ReactNode;
    },
  ref: React.ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <div className="max-w-full">
      <div className="relative grid gap-2 capitalize">
        {label && (
          <div className="flex items-baseline gap-1 text-start">
            <Label htmlFor={props.id} value={label} />
            {labelOptional && <span className="text-sm">{labelOptional}</span>}
          </div>
        )}
        <div className="relative">
          <Textarea
            {...props}
            theme={themeInput}
            color={helperText ? "failure" : "gray"}
            className={` ${className || ""}`}
            ref={ref}
          />
          {helperText && <AlertError text={helperText} />}
        </div>
      </div>
    </div>
  );
}

export const InputTextarea = forwardRef(InputTextRef);
