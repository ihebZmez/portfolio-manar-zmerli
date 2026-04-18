import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");
const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

const config = {
  darkMode: ["class"],

  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        /* =========================
           PRIMARY GREEN SYSTEM
        ========================== */

        primary: {
          DEFAULT: "#346739",
          50: "#EAF4EC",
          100: "#D6E9D8",
          200: "#B3D3B8",
          300: "#9FCB98",
          400: "#79AE6F",
          500: "#5F9B5B",
          600: "#4C854A",
          700: "#346739",
          800: "#2A5230",
          900: "#1F3D24",
          foreground: "#FFFFFF",
        },

        secondary: {
          DEFAULT: "#79AE6F",
          50: "#F6FAF4",
          100: "#EDF6EA",
          200: "#DCEAD7",
          300: "#C7DEC2",
          400: "#A9CE9F",
          500: "#79AE6F",
          600: "#5F9458",
          700: "#4A7746",
          800: "#365935",
          900: "#223924",
          foreground: "#1F3D24",
        },

        accent: {
          DEFAULT: "#9FCB98",
          foreground: "#1F3D24",
        },

        /* =========================
           SURFACE SYSTEM (IMPORTANT FIX)
        ========================== */

        surface: {
          0: "#F2EDC2", // page background (soft warm)
          1: "#F6F1D0", // sections
          2: "#EDE6B8", // cards default (LESS bright than white)
          3: "#E4DDA6", // hover / elevated
        },

        /* semantic UI tokens */
        background: "#F2EDC2",

        foreground: {
          DEFAULT: "#1F3D24",
          muted: "#4A5A4B",
        },

        card: {
          DEFAULT: "#F6F1D0",
          foreground: "#1F3D24",
        },

        popover: {
          DEFAULT: "#F6F1D0",
          foreground: "#1F3D24",
        },

        muted: {
          DEFAULT: "#EAF4EC",
          foreground: "#4A5A4B",
        },

        border: "#D6E9D8",
        input: "#D6E9D8",
        ring: "#346739",

        destructive: {
          DEFAULT: "#E45858",
          foreground: "#FFFFFF",
        },

        success: {
          DEFAULT: "#346739",
          foreground: "#FFFFFF",
        },

        warning: {
          DEFAULT: "#D9B65D",
          foreground: "#1F3D24",
        },

        black: "#1F3D24",
        white: "#FFFFFF",
      },

      /* =========================
         BORDER SYSTEM
      ========================== */

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        ml: "calc(var(--radius) - 9px)",
      },

      /* =========================
         ANIMATIONS
      ========================== */

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s linear infinite",
        fadeIn: "fadeIn 0.4s ease-out",
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,

    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),

          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" cx="10" cy="10" r="1.5"/></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
  ],
} satisfies Config;

/* =========================
   CSS VARIABLES EXPORT
========================== */

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));

  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
