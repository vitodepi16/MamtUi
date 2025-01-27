import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#a4b4b4',
        secondary: '#838b94',
        third: '#415262',
        ciola: '#6A319C'
      },
      fontFamily: {
        custom: ['PokemonFont', 'sans-serif'], // Nome usato nella regola @font-face
      },
    },
  },
  plugins: [daisyui],
};
