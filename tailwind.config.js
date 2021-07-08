module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "136px": "136px",
        "72px": "72px",
      },
      width: {
        "484px": "484px",
        "72px": "72px",
      },
      padding: {
        "60px": "60px",
        "24px": "24px",
      },
      margin: {
        "8px": "8px",
        "76px": "76px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
