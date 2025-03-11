import {
  content as _content,
  plugin as _plugin,
} from "flowbite-react/tailwind";
import plugin from "tailwindcss/plugin";
/** @type {import('tailwindcss').Config} */
export const content = [
  // ...
  _content(),
];
export const plugins = [
  // ...
  _plugin(),
  plugin(function ({ addUtilities }) {
    addUtilities({
      ".text-stroke": {
        "-webkit-text-stroke-width": "2px",
        "-webkit-text-stroke-color": "var(--primary)",
      },
      ".text-stroke-4": {
        "-webkit-text-stroke-width": "4px",
      },
    });
  }),
];
