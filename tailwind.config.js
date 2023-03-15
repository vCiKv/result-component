/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "light-red": "hsl(var(--color-light-red)/<alpha-value>)",
        "orangey-yellow": "hsl(var(--color-orangey-yellow)/<alpha-value>)",
        "green-teal": "hsl(var(--color-green-teal)/<alpha-value>)",
        "cobalt-blue": "hsl(var(--color-cobalt-blue)/<alpha-value>)",
        "pale-blue": "hsl(var(--color-pale-blue)/<alpha-value>)",
        "light-lavender": "hsl(var(--color-light-lavender)/<alpha-value>)",
        "darkgray-blue": "hsl(var(--color-darkgray-blue)/<alpha-value>)",
        "g-c-violet":"hsla(256, 72%, 46%, 1)",
        "g-c-blue":"hsla(241, 72%, 46%, 0)",
        "g-slate":"hsl(252, 100%, 67%)",
        "g-royal":"hsl(241, 81%, 54%)"
      },
    },
  },
  plugins: [],
};
