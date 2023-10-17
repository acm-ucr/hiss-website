/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.5rem",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        hiss: {
          blue: "#4EBEE0",
          purple: "#C6B1FB",
          yellow: "#FFC875",
          black: "#303030",
        },
      },
    },
  },
  plugins: [],
};
