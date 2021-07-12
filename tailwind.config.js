module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "388px": "388px",
        "160px": "160px",
        "136px": "136px",
        "72px": "72px",
        "50px": "50px",
      },
      width: {
        "1280px": "1280px",
        "1080px": "1080px",
        "510px": "510px",
        "484px": "484px",
        "480px": "480px",
        "476px": "476px",
        "360px": "360px",
        "350px": "350px",
        "346px": "346px",
        "280px": "280px",
        "266px": "266px",
        "240px": "240px",
        "150px": "150px",
        "72px": "72px",
      },
      padding: {
        "120px": "120px",
        "80px": "80px",
        "60px": "60px",
        "24px": "24px",
        15: "3.75rem",
      },
      margin: {
        "544px": "544px",
        "153px": "153px",
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
