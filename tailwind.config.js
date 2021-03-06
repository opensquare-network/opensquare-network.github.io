module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      smsm: "414px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      inter: ["inter", "sans-serif"],
      mont: ["montserrat", "sans-serif"],
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.200", "currentColor"),
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
      "grey-200": "#F0F3F8",
    }),
    boxShadow: {
      DEFAULT:
        "0px 4px 31px rgba(26, 33, 44, 0.04), 0px 0.751293px 3.88168px rgba(26, 33, 44, 0.03)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0px 4px 31px rgba(26, 33, 44, 0.04), 0px 0.751293px 3.88168px rgba(26, 33, 44, 0.03)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      none: "none",
      200: "0px 4px 31px rgba(26, 33, 44, 0.06), 0px 0.751293px 8px rgba(26, 33, 44, 0.04)",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "grey-200": "#F0F3F8",
      "grey-300": "#E2E8F0",
      "grey-900": "#1A212C",
    }),
    textColor: {
      "dark-major": "#2E343D",
      "dark-minor": "#A1A8B2",
      white: "#fff",
      "light-minor": "rgba(255, 255, 255, 0.65)",
      "light-minimal": "rgba(255, 255, 255, 0.35)",
      "turquoise-500": "#04D2C5",
    },
    extend: {
      height: {
        "576px": "576px",
        "476px": "476px",
        "388px": "388px",
        "336px": "336px",
        "288px": "288px",
        "284px": "284px",
        "240px": "240px",
        "233px": "233px",
        "200px": "200px",
        "192px": "192px",
        "160px": "160px",
        "136px": "136px",
        "124px": "124px",
        "72px": "72px",
        "56px": "56px",
        "50px": "50px",
        "44px": "44px",
        "1px": "1px",
      },
      maxWidth: {
        "1400px": "1400px",
      },
      width: {
        "1400px": "1400px",
        "1280px": "1280px",
        "1080px": "1080px",
        "800px": "800px",
        "612px": "612px",
        "560px": "560px",
        "520px": "520px",
        "512px": "512px",
        "510px": "510px",
        "484px": "484px",
        "480px": "480px",
        "476px": "476px",
        "400px": "400px",
        "360px": "360px",
        "350px": "350px",
        "346px": "346px",
        "310px": "310px",
        "300px": "300px",
        "286px": "286px",
        "280px": "280px",
        "266px": "266px",
        "242px": "242px",
        "240px": "240px",
        "200px": "200px",
        "171px": "171px",
        "150px": "150px",
        "72px": "72px",
        "64px": "64px",
        "56px": "56px",
      },
      padding: {
        "120px": "120px",
        "80px": "80px",
        "68px": "68px",
        "60px": "60px",
        "24px": "24px",
        15: "3.75rem",
      },
      margin: {
        "minus1/2": "-50%",
        "544px": "544px",
        "264px": "264px",
        "246px": "246px",
        "153px": "153px",
        "146px": "146px",
        "133px": "133px",
        "120px": "120px",
        "80px": "80px",
        "78px": "78px",
        "76px": "76px",
        "68px": "68px",
        "61px": "61px",
        "52px": "52px",
        "8px": "8px",
      },
      lineHeight: {
        "60px": "60px",
        "54px": "54px",
        "48px": "48px",
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
