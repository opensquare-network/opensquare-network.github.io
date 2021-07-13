module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "grey-300": "#E2E8F0",
    }),
    textColor: {
      "dark-major": "#2E343D",
      "dark-minor": "#A1A8B2",
      white: "#fff",
      "light-minor": "rgba(255, 255, 255, 0.65)",
      "light-minimal": "rgba(255, 255, 255, 0.35)",
    },
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
        "520px": "520px",
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
        "200px": "200px",
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
