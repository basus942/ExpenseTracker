module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "330px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        secondary: {
          100: "#849AA5", // Lighter shade
          200: "#1D3557",
          300: "#335877",
          400: "#0F1F37",
        },
        primary: {
          100: "#DFF6F7", // Lighter shade
          200: "#A8DADC",
          300: "#BADDDD",
          400: "#7EACAE",
        },
        active: {
          100: "#F9A5AA", // Lighter shade
          200: "#E63946",
          300: "#FF5A63",
          400: "#9C222C",
        },
        grey: {
          100: "#E5E5E5", // Lighter shade
          200: "#b6b6b6",
          300: "#666666", // Darker shade
        },
      },
      textColor: {
        white: {
          100: "#FFFFFF", // Lighter shade
          200: "#F1FAEE",
          300: "#C2C2C2", // Darker shade
        },
        grey: {
          100: "#E5E5E5", // Lighter shade
          200: "#b6b6b6",
          300: "#666666", // Darker shade
        },
        active: {
          100: "#F9A5AA", // Lighter shade
          200: "#E63946",
          300: "#FF5A63",
          400: "#9C222C",
        },
      },
    },
  },
  plugins: [],
};
