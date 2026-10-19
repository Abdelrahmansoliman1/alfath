export const timelineTheme = {
  root: {
    direction: {
      horizontal: "sm:flex",
      vertical: "relative border-l-2 border-secondary/40 pl-3",
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
        base: "mb-4 text-base font-normal text-gray leading-relaxed line-clamp-2",
      },
      title: {
        base: "text-lg pt-4 font-bold tracking-tight text-primary",
      },
    },
    point: {
      horizontal: "flex items-center ",
      line: "hidden h-0.5 w-full bg-secondary sm:flex",
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
            "absolute -left-6 flex size-12 items-center justify-center rounded-2xl text-secondary bg-surface border border-border p-2.5 transition-colors duration-300 group-hover:bg-secondary group-hover:border-secondary group-hover:text-white",
        },
      },
      vertical: "",
    },
  },
};
