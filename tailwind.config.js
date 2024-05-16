/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        40: "40%",
        "2rem": "2rem",
      },
      keyframes: {
        slowBounce: {
          "0%, 100%": {
            transform: "translateY(-4%)",
            animationTimingFunction: "ease-in-out",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "ease-in-out",
          },
        },
      },

      animation: {
        bounce: "slowBounce 2s infinite",
      },
    },
  },
  plugins: [],
};
