import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");
const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

function hexToRgbString(hex: string) {
  const normalized = hex.replace("#", "");
  const value =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => char + char)
          .join("")
      : normalized;

  const numericValue = Number.parseInt(value, 16);
  const r = (numericValue >> 16) & 255;
  const g = (numericValue >> 8) & 255;
  const b = numericValue & 255;

  return `${r}, ${g}, ${b}`;
}

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
      /* =========================
         DARK UI COLOR SYSTEM (IMPROVED UX)
      ========================== */
      colors: {
        /* Core background system (IMPORTANT FIX) */
        background: {
          DEFAULT: "#091413", // deep dark green-black (main canvas)
          soft: "#0D1C18", // slightly lighter section bg
          elevated: "#122621", // cards
        },

        foreground: {
          DEFAULT: "#B0E4CC", // readable mint text
          muted: "#7FAE9A", // secondary text
        },

        /* PRIMARY (kept but tuned for dark UI readability) */
        primary: {
          DEFAULT: "#408A71",
          50: "#E6F4EF",
          100: "#CCE9DF",
          200: "#99D3BF",
          300: "#66BD9F",
          400: "#408A71",
          500: "#2F6E5A",
          600: "#285A48",
          700: "#1F4638",
          800: "#163228",
          900: "#091413",
          foreground: "#B0E4CC",
        },

        secondary: {
          DEFAULT: "#285A48",
          foreground: "#B0E4CC",
        },

        accent: {
          DEFAULT: "#B0E4CC",
          foreground: "#091413",
        },

        /* SURFACE SYSTEM (CRITICAL FOR UX DEPTH) */
        surface: {
          DEFAULT: "#122621",
          muted: "#0D1C18",
          elevated: "#163228",
          foreground: "#B0E4CC",
        },

        card: {
          DEFAULT: "#122621",
          foreground: "#B0E4CC",
        },

        popover: {
          DEFAULT: "#122621",
          foreground: "#B0E4CC",
        },

        muted: {
          DEFAULT: "#0D1C18",
          foreground: "#7FAE9A",
        },

        border: "#1F4638",
        input: "#1F4638",
        ring: "#408A71",

        destructive: {
          DEFAULT: "#E45858",
          foreground: "#FFFFFF",
        },

        success: {
          DEFAULT: "#408A71",
          foreground: "#B0E4CC",
        },

        warning: {
          DEFAULT: "#E9C46A",
          foreground: "#091413",
        },

        black: "#091413",
        white: "#B0E4CC",
      },

      /* =========================
         TYPOGRAPHY
      ========================== */
      fontSize: {
        hero: ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.05" }],
        "section-title": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.1" }],
      },

      /* =========================
         SPACING
      ========================== */
      spacing: {
        section: "5rem",
        "section-lg": "7rem",
        stack: "1.5rem",
        cluster: "1rem",
      },

      maxWidth: {
        shell: "80rem",
        content: "72rem",
        panel: "24rem",
      },

      /* =========================
         SURFACE BACKGROUNDS (FIXED UX)
      ========================== */
      backgroundImage: {
        "surface-panel": "linear-gradient(135deg, #122621 0%, #0D1C18 100%)",

        "surface-overlay": "linear-gradient(180deg, #0D1C18 0%, #091413 100%)",

        "canvas-fade": "linear-gradient(to top, #091413 0%, transparent 80%)",
      },

      boxShadow: {
        soft: "0 10px 25px -18px rgba(0,0,0,0.6)",
        panel: "0 18px 45px -22px rgba(0,0,0,0.7)",
        glow: "0 0 0 1px #1F4638, 0 0 30px rgba(64,138,113,0.15)",
      },

      /* =========================
         ANIMATION
      ========================== */
      keyframes: {
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },

      animation: {
        shimmer: "shimmer 2s linear infinite",
        fadeIn: "fadeIn 0.4s ease-out",
        spotlight: "spotlight 2s ease",
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),

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

export default config;
