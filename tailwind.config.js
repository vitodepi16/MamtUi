import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#415262',
        secondary: '#838b94',
        third: '#a4b4b4',
        ciola: '#6A319C'
      },},
  },
  plugins: [daisyui],
};
