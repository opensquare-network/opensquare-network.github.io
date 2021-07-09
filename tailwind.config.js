module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "160px": "160px",
        "136px": "136px",
        "72px": "72px",
      },
      width: {
        "484px": "484px",
        "346px": "346px",
        "72px": "72px",
      },
      padding: {
        "60px": "60px",
        "24px": "24px",
        15: "3.75rem",
      },
      margin: {
        "76px": "76px",
        "68px": "68px",
        "8px": "8px",
      },
      lineHeight: {
        "54px": "54px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
