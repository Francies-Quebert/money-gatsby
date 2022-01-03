module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0D2232",
        secondary: {
          orange: {
            50: "#FFF7ED",
            100: "#FFEDD5",
            200: "#FED7AA",
            300: "#FDBA74",
            400: "#FB923C",
            500: "#F59E0B",
            600: "#EA580C",
          },
          gray: {
            700: "#3F3F46",
          },
          blue: {
            300: "#110803",
            400: "#000034",
            500: "#010039",
            600: "#00013c",
          },
        },
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "70%": "auto 70%",
        16: "4rem",
      },
      backgroundPosition: {
        full: "0px 100%",
      },
      backgroundColor: {
        offerblue: "#263a73",
        primary: "#0D2232",
        secondary: {
          orange: {
            50: "#FFF7ED",
            100: "#FFEDD5",
            200: "#FED7AA",
            300: "#FDBA74",
            400: "#FB923C",
            500: "#F59E0B",
            600: "#EA580C",
          },
          gray: {
            700: "#3F3F46",
          },
        },
      },
      backgroundImage: {
        logo: "url(../images/favicon_logo.png)",
      },
      scale: {
        82: ".82",
      },
      fontFamily: {
        body: ["Montserrat", "ui-sans-serif", "system-ui"],
      },
      padding: {
        "6-5": "24px",
      },
      minWidth: {
        200: "200px",
      },
      boxShadow: {
        "1xl": " 16px 8px 16px 8px rgba(0,0,0,0.2);",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover", "focus"],
      fill: ["hover"],
      // backgroundColor: ["focus-within"],
      gradientColorStops: ["group-hover"],
      display: ["hover", "focus", "group-hover"],
      position: ["hover", "focus", "group-hover"],
      textColor: ["active"],
      backgroundImage: ["hover", "focus"],
      visibility: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};
