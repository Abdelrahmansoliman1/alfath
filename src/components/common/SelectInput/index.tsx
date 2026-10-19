import { Dropdown, Label } from "flowbite-react";
import { useCallback } from "react";
// import AlertError from "@components/alertError";
import { FaChevronDown } from "react-icons/fa6";
import AlertError from "../AlertError";

const theme = {
  arrowIcon: "ml-2 h-4 w-4",
  content:
    "py-1 focus:outline-none h-[calc(100%-16px)] w-full overflow-auto max-h-[300px]",
  floating: {
    animation: "transition-opacity z-20",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        dark: "bg-gray-900 dark:bg-gray-700",
        light: "bg-white",
        auto: "bg-white dark:bg-gray-700",
      },
      placement: "-4px",
    },
    base: "!z-100 h-fit  !w-full !min-w-full   pe-2 py-2 !border-0 !rounded-2xl  w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
    content: "py-1 text-sm text-gray-700 ",
    divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
    header: "block px-4 py-2 text-sm text-gray-700 ",
    hidden: "invisible opacity-0",
    item: {
      container: "",
      base: "flex w-full cursor-pointer items-center justify-start rounded-lg px-4 py-2 text-sm text-primary hover:bg-surface focus:bg-surface focus:outline-none ",
      icon: "mr-2 h-4 w-4",
    },
    style: {
      dark: "bg-gray-900 text-white dark:bg-gray-700",
      light: "border border-gray-200 bg-white text-gray-900",
      auto: "border border-gray-200 bg-white text-gray-900 ",
    },
    target: "w-fit",
  },
  inlineWrapper: "flex items-center",
};

export default function SelectInput({
  name,
  options,
  value,
  label,
  setValue,
  placeholder,
  error,
}: {
  name: string;
  label?: string;
  value: string | number;
  options: {
    label: string;
    value: string | number;
  }[];
  setValue: (name: string, value: string | number) => void;
  placeholder?: string;
  error: string;
}) {
  const handleSelect = useCallback(
    (value: string | number) => {
      setValue(name, value);
    },
    [name, setValue]
  );
  return (
    <div className="grid gap-2 relative">
      <input
        type="text"
        className="hidden"
        id={name}
        name={name}
        title={name}
        defaultValue={value}
      />
      {label && <Label value={label} className="text-start" />}
      <Dropdown
        label={""}
        renderTrigger={() => (
          <div className="relative flex cursor-pointer items-center justify-between gap-2 rounded-xl border border-border bg-white px-4 py-3 transition-colors hover:border-secondary">
            <span className="text-sm font-medium line-clamp-1">
              {options.find((item) => item.value === value)?.label ||
                placeholder ||
                "select items"}
            </span>
            <FaChevronDown className="size-3.5 text-secondary" />
            {error && <AlertError text={error} />}
          </div>
        )}
        theme={theme}
      >
        <div className="grid max-h-full gap-2 overflow-auto">
          {options.map((option) => (
            <Dropdown.Item
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`${
                value === option.value ? "bg-secondary-20 font-semibold" : ""
              }`}
            >
              <span>{option.label}</span>
            </Dropdown.Item>
          ))}
        </div>
      </Dropdown>
    </div>
  );
}
