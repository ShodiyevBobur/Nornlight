/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "1rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
      },
    },
    extend: {
      colors: {
        primary: "#454545",
        second: "#F2F2F2",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
