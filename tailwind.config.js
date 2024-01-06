/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      secondary: "#1D3557",
      primary: "#A8DADC",
      active: "#E63946",
    },
    textColor: {
      white: "#F1FAEE",
      grey: "#b6b6b6",
      active: "#E63946",
    },
  },
  plugins: [],
};
