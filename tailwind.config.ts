import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    screens: {
      xs: "375px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "770px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1350px",
        },
      },
    },

  },
  plugins: [],
};
export default config;
