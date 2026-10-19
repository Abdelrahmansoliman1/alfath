export const theme = {
  root: {
    base: "fixed top-3 inset-x-3 sm:inset-x-6 xl:inset-x-0 xl:mx-auto xl:max-w-[80rem] z-50 px-2 sm:px-4 rounded-2xl bg-primary border border-white/10 shadow-xl shadow-black/20",
    rounded: {
      on: "rounded",
      off: "",
    },
    bordered: {
      on: "border",
      off: "",
    },
    inner: {
      base: "mx-auto flex flex-nowrap items-center gap-4 lg:gap-16 py-3 md:py-4 justify-between",
      fluid: {
        on: "",
        off: "w-full",
      },
    },
  },
  brand: {
    base: "flex items-center shrink-0",
  },
  collapse: {
    base: "w-full lg:block lg:w-auto ",
    list: "mt-4  flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    hidden: {
      on: "hidden !mx-0",
      off: "",
    },
  },
  link: {
    base: "block py-2 pl-3 pr-4 md:p-0 text-white/80 hover:text-white transition-colors capitalize text-base font-medium",
    active: {
      on: "text-secondary",
      off: "border-b md:border-0 relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:rounded-full after:bg-secondary md:hover:bg-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-100",
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed ",
      off: "",
    },
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden",
    icon: "h-6 w-6 shrink-0",
  },
};

export const dropdownTheme = {
  arrowIcon: "ml-2 h-4 w-4",
  content: "py-1 focus:outline-none ",
  floating: {
    animation: "transition-opacity",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        dark: "bg-gray-900 dark:bg-gray-700",
        light: "bg-white",
        auto: "bg-white dark:bg-gray-700",
      },
      placement: "-4px",
    },
    base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
    content: "py-1 text-sm text-gray-700",
    divider: "my-1 h-px bg-gray-100",
    header: "block px-4 py-2 text-sm text-gray-700",
    hidden: "invisible opacity-0",
    item: {
      container: "",
      base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none text-black ",
      icon: "mr-2 h-4 w-4",
    },
    style: {
      dark: "bg-gray-900 text-white dark:bg-gray-700 !bg-transparent",
      light: "border border-gray-200 bg-white text-gray-900",
      auto: "border border-gray-200 bg-white text-gray-900 ",
    },
    target: "w-fit",
  },
  inlineWrapper: "flex items-center ",
};
