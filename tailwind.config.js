module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add any other paths that contain your components
  ],
  safelist: [
    {
      pattern:
        /(bg|text|border|from|to)-(primary|secondary|accent|neutral)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3e8e8",
          100: "#e1c5c5",
          200: "#cf9e9e",
          300: "#bd7777",
          400: "#b15959",
          500: "#9f2121",
          600: "#971d1d",
          700: "#8d1818",
          800: "#831414",
          900: "#720b0b",
        },
        secondary: {
          50: "#e5f2f7",
          100: "#bfdfe9",
          200: "#95cadb",
          300: "#6bb4cd",
          400: "#4ba4c2",
          500: "#0d4466",
          600: "#0b3d5c",
          700: "#093551",
          800: "#072c47",
          900: "#041e35",
        },
        accent: {
          50: "#fff8e1",
          100: "#ffecb3",
          200: "#ffe082",
          300: "#ffd54f",
          400: "#ffca28",
          500: "#ffc107",
          600: "#ffb300",
          700: "#ffa000",
          800: "#ff8f00",
          900: "#ff6f00",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        // success: {
        //   DEFAULT: "var(--success)",
        //   foreground: "var(--success-foreground)",
        // },
        // destructive: {
        //   DEFAULT: "var(--destructive)",
        //   foreground: "var(--destructive-foreground)",
        // },
        // warning: {
        //   DEFAULT: "var(--warning)",
        //   foreground: "var(--warning-foreground)",
        // },
        // info: {
        //   DEFAULT: "var(--info)",
        //   foreground: "var(--info-foreground)",
        // },
      },
      animation: {
        "pulse-slow": "pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)",
        float: "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-in forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addBase }) {
      addBase({
        ":root": {
          "--background": "#ffffff",
          "--foreground": "#000000",

          "--primary": "#9f2121",
          "--primary-foreground": "#ffffff",

          "--secondary": "#072c47",
          "--secondary-foreground": "#ffffff",

          "--accent": "#ffc107",
          "--accent-foreground": "#000000",

          "--muted": "#f5f5f5",
          "--muted-foreground": "#757575",

          "--border": "#e5e7eb",
          "--input": "#e5e7eb",
          "--ring": "#9f2121",
        },
        ".dark": {
          "--background": "#121212",
          "--foreground": "#ffffff",

          "--primary": "#cf9e9e",
          "--primary-foreground": "#000000",

          "--secondary": "#6bb4cd",
          "--secondary-foreground": "#000000",

          "--accent": "#ffd54f",
          "--accent-foreground": "#000000",

          "--muted": "#424242",
          "--muted-foreground": "#cccccc",

          "--border": "#333333",
          "--input": "#333333",
          "--ring": "#cf9e9e",
        },
      });
    },
  ],
};
