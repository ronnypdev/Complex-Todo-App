/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SpaceMono: ["Josefin Sans", "sans-serif"]
      },
      colors: {
        lightGradient: "var(--light-linear-gradient)",
        darkGradient: "var(--dark-linear-gradient)",
        primaryBlue: "var(--color-blue)",
        white: "var(--color-white)",
        lightGrey: "var(--color-light-grey)",
        paleGrey: "var(--color-pale-grey)",
        grey: "var(--color-grey)",
        midGrey: "var(--color-mid-grey)",
        darkGrey: "var(--color-dark-grey)",
        spaceGrey: "var(--color-space-grey)",
        lightSpaceGrey: "var(--color-light-space-grey)",
        spaceBlack: "var(--color-space-black)",
        midnightBlack: "var(--color-midnight-black)"
      },
      boxShadow: {
        "paleWhite": "var(--light-box-shadow)"
      },
    },
  },
  plugins: [],
}

