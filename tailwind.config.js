/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/ui/svg-follow-scroll.tsx",
    "./svg-follow-scroll-main.tsx",
    "./index.html",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      spacing: {
        42: "10.5rem",
      },
      fontFamily: {
        "jakarta-sans": ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
