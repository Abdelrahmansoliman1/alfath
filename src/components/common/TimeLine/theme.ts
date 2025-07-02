export const timelineTheme = {
  root: {
    direction: {
      horizontal: "sm:flex",
      vertical: "relative border-l-2 border-primary pl-3 dark:border-gray-700",
    },
  },
  item: {
    root: {
      horizontal: "relative mb-6 sm:mb-0",
      vertical: "mb-10 ml-6",
    },
    content: {
      root: {
        base: "",
        horizontal: "mt-3 sm:pr-8",
        vertical: "",
      },
      body: {
        base: "mb-4 text-base font-normal text-gray-500 line-clamp-2",
      },
      title: {
        base: "text-lg pt-4 font-semibold text-gray-900 dark:text-white",
      },
    },
    point: {
      horizontal: "flex items-center ",
      line: "hidden h-0.5 w-full bg-primary sm:flex",
      marker: {
        base: {
          horizontal:
            "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-primary ",
          vertical:
            "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-primary ",
        },
        icon: {
          base: "size-12",
          wrapper:
            "absolute -left-6 flex size-12 items-center justify-center rounded-full text-primary bg-white rounded-full p-2 group-hover:bg-primary group-hover:text-white",
        },
      },
      vertical: "",
    },
  },
};
