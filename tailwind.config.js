/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-light": "#60b246",
        "orange-dark": "#f5721b",
        "text-light": "#7e808c",
      },
    },
  },
  plugins: [],
};
