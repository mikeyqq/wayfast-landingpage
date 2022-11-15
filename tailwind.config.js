/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "wayfast-green": "#218679",
    },
    border: {
      "border-wayfast-green": "#208679",
    },
  },
  plugins: [],
};
