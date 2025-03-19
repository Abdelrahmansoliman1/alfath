"use client";

import { Label, TextInput, TextInputProps } from "flowbite-react";
import { forwardRef } from "react";
import AlertError from "../AlertError";
const themeInput = {
  base: "flex custom-helper-text",
  addon:
    "inline-flex items-center border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900",
  field: {
    base: "relative w-full ",
    icon: {
      base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
      svg: "h-5 w-5 text-light-gray-2",
    },
    rightIcon: {
      base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
      svg: "h-5 w-5 text-light-gray-2",
    },
    input: {
      base: "block w-full border !focus:outline-none !focus:shadow-none disabled:cursor-not-allowed disabled:opacity-50 outline-0 !bg-white",
      sizes: {
        sm: "p-2 sm:text-xs",
        md: "py-2.5 px-4 text-sm",
        lg: "p-4 sm:text-base",
      },
      colors: {
        gray: "border-border bg-transparent text-gray-900 focus:border-primary",
        info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500",
        failure:
          "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 ",
        warning:
          "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500",
        success:
          "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 ",
      },
      withRightIcon: {
        on: "pr-10",
        off: "",
      },
      withIcon: {
        on: "pl-10",
        off: "",
      },
      withAddon: {
        on: "rounded-r-lg",
        off: "rounded-lg",
      },
      withShadow: {
        on: "shadow-sm",
        off: "",
      },
    },
  },
};
function InputTextRef(
  {
    label,
    className,
    helperText,
    labelOptional,
    rightElement,
    ...props
  }: TextInputProps &
    React.RefAttributes<HTMLInputElement> & {
      label?: string;
      labelOptional?: string;
      rightElement?: React.ReactNode;
    },
  ref: React.ForwardedRef<HTMLInputElement>
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
          <TextInput
            {...props}
            theme={themeInput}
            color={helperText ? "failure" : "gray"}
            className={` ${className || ""}`}
            type={props.type}
            onFocus={(e) =>
              e.target.addEventListener(
                "wheel",
                function (e) {
                  e.preventDefault();
                },
                { passive: false }
              )
            }
            ref={ref}
          />
          {rightElement && (
            <span className="absolute right-0 top-0 flex h-full items-center pr-4">
              {rightElement}
            </span>
          )}
          {helperText && <AlertError text={helperText} />}
        </div>
      </div>
    </div>
  );
}

export const InputText = forwardRef(InputTextRef);
