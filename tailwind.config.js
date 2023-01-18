/**
 * @format
 * @type {import('tailwindcss').Config}
 */
const colors = require("tailwindcss/colors");

module.exports = {
   content: [
      "./src/components/**/*.{ts,tsx,js,jsx}",
      "./src/pages/**/*.{ts,tsx,js,jsx}",
      "./src/containers/**/*.{ts,tsx,js,jsx}",
   ],
   theme: {
      extend: {
         colors: {
            emerald: colors.emerald,
            fuchsia: colors.fuchsia,
            "tw-text-main": "var(--text-main)",
            "tw-text-extra": "var(--text-extra)",
            "tw-text-reverse": "var(--text-reverse)",

            "tw-bg-main-900": "var(--bg-main-900)",
            "tw-bg-main-800": "var(--bg-main-800)",
            "tw-bg-main-700": "var(--bg-main-700)",
            "tw-bg-main-600": "var(--bg-main-600)",
            "tw-bg-main-500": "var(--bg-main-500)",
            "tw-bg-main-400": "var(--bg-main-400)",
            "tw-bg-reverse": "var(--bg-reverse)",
            "tw-bg-reverse-extra": "var(--bg-reverse-extra)",
            "tw-bg-logo-reverse": "var(--bg-logo-reverse)",

            "tw-bd-layout": "var(--bd-layout)",
            "tw-bd-button-medium": "var(--bd-button-medium)",
            "tw-bd-button-small": "var(--bd-button-small)",

            "tw-main-color-large": "var(--main-color-large)",
            "tw-main-color-medium": "var(--main-color-medium)",
            "tw-main-color-small": "var(--main-color-small)",
            "tw-main-color-select": "var(--main-color-select)",
         },
         boxShadow: {
            "white-shadow-dark":
               "rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px;",
            "dark-shadow-dark":
               "rgb(255 255 255 / 20%) 0px 0px 15px, rgb(255 255 255 / 15%) 0px 0px 3px 1px;",
            "tt-shadow": "var(--shadow-color)",
         },
      },
   },
   plugins: [
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/typography"),
   ],
};
