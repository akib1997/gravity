module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      sm: ["14px", "18px"],
      base: ["16px", "24px"],
      lg: ["18px", "26px"],
      xl: ["22px", "30px"],
      "2xl": ["26px", "35px"],
      "3xl": ["32px", "40px"],
      "4xl": ["36px", "44px"],
      "5xl": ["40px", "49px"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        gravityDark: "#090D11",
        gravityDarkLight: "#10181E",
        gravityYellow: "#FFA600",
        gravityGrayLight: " #A3A7A9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
