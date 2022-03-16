module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      archivo: ["Archivo", "sans-serif"],
      "bebas-neue": ["Bebas Neue", "sans-serif"],
    },
    container: {
      center: true,
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    rounded: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.625",
      full: "9999px",
      large: "12px",
    },
    extend: {
      colors: {
        custom: {
          grey: {
            1: "#6d6d6d",
            2: "#494747",
            3: "#2d2c2c",
            4: "#2B2B2D",
          },
          green: "#4befbc",
          blue: "#73ddda",
          purple: "#5d5fef",
          pink: {
            1: "#fd9cfd",
            2: "#ef5da8",
          },
        },
      },
    },
  },
  plugins: [],
};
