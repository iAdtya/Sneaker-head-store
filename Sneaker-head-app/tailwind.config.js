/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  daisyui: {
    themes: ["retro"],
  },
  theme: {
    extend: {},
  },
  animation: {
    "text-gradient": "text-gradient 1.5s linear infinite",
  },
  keyframes: {
    "text-gradient": {
      to: {
        backgroundPosition: "200% center",
      },
    },
  },

  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
