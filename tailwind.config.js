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
        "1080px": "1080px",
        "484px": "484px",
        "480px": "480px",
        "350px": "350px",
        "346px": "346px",
        "266px": "266px",
        "72px": "72px",
      },
      padding: {
        "60px": "60px",
        "24px": "24px",
        15: "3.75rem",
      },
      margin: {
        "78px": "78px",
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
    extend: {
      margin: ["even", "odd"],
      // display: ['md'],
    },
  },
  plugins: [],
};
