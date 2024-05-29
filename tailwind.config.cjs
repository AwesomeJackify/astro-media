const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      textColor: {
        default: "var(--color-text)",
        flip: "var(--color-text-flip)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
        flip: "var(--color-background-flip)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#f97316",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#f97316",
        },
      },
    ],
  },
  plugins: [
    require("tailwindcss-fluid-type"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};
