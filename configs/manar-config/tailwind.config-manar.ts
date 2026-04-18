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

/* =========================
   PALETTE (NEW PORTFOLIO STYLE)
   warm pastel neon on dark UI
========================= */
const PALETTE = {
  p1: "#FFF7CD", // soft yellow
  p2: "#FDC3A1", // peach
  p3: "#FB9B8F", // coral
  p4: "#F57799", // pink
};

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
         CORE DARK UI SYSTEM
      ========================== */
      colors: {
        /* BACKGROUND SYSTEM */
        background: {
          DEFAULT: "#070A0F", // deeper modern dark
          soft: "#0B1220",
          elevated: "#111A2E",
        },

        foreground: {
          DEFAULT: "#F5F7FF",
          muted: "#A7B0C0",
        },

        /* =========================
           NEW PORTFOLIO ACCENT SYSTEM
        ========================== */
        accent: {
          DEFAULT: PALETTE.p4,
          soft: PALETTE.p2,
          warm: PALETTE.p3,
          light: PALETTE.p1,
          foreground: "#070A0F",
        },

        primary: {
          DEFAULT: PALETTE.p3,
          soft: PALETTE.p2,
          strong: PALETTE.p4,
          foreground: "#070A0F",
        },

        secondary: {
          DEFAULT: PALETTE.p2,
          foreground: "#070A0F",
        },

        highlight: PALETTE.p1,

        /* SURFACES (FIXED FOR YOUR COMPONENTS) */
        surface: {
          DEFAULT: "#111A2E",
          muted: "#0B1220",
          elevated: "#16213A",
          foreground: "#F5F7FF",
        },

        card: {
          DEFAULT: "#111A2E",
          foreground: "#F5F7FF",
        },

        popover: {
          DEFAULT: "#111A2E",
          foreground: "#F5F7FF",
        },

        muted: {
          DEFAULT: "#0B1220",
          foreground: "#A7B0C0",
        },

        border: "#1C2A44",
        input: "#1C2A44",
        ring: PALETTE.p3,

        destructive: {
          DEFAULT: "#FF5C7A",
          foreground: "#FFFFFF",
        },

        success: {
          DEFAULT: PALETTE.p3,
          foreground: "#070A0F",
        },

        warning: {
          DEFAULT: PALETTE.p2,
          foreground: "#070A0F",
        },

        black: "#070A0F",
        white: "#F5F7FF",
      },

      /* =========================
         TYPOGRAPHY
      ========================== */
      fontSize: {
        hero: ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.05" }],
        "section-title": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.1" }],
      },

      /* =========================
         LAYOUT
      ========================== */
      maxWidth: {
        shell: "80rem",
        content: "72rem",
        hero: "64rem",
        panel: "24rem",
      },

      spacing: {
        section: "5rem",
        "section-lg": "7rem",
        "hero-offset": "9rem",
        stack: "1.5rem",
        cluster: "1rem",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        panel: "1.75rem",
        pill: "9999px",
      },

      /* =========================
         SURFACES (IMPORTANT FIX FOR UI CONSISTENCY)
      ========================== */
      backgroundImage: {
        "surface-panel": "linear-gradient(135deg, #16213A 0%, #0B1220 100%)",

        "surface-overlay": "linear-gradient(180deg, #0B1220 0%, #070A0F 100%)",

        "canvas-fade": "linear-gradient(to top, #070A0F 0%, transparent 85%)",

        "brand-ring":
          "conic-gradient(from 90deg at 50% 50%, #FB9B8F 0%, #FDC3A1 50%, #F57799 100%)",
      },

      /* =========================
         SHADOWS (MODERN SOFT UI)
      ========================== */
      boxShadow: {
        soft: "0 10px 25px -18px rgba(0,0,0,0.6)",
        panel: "0 20px 50px -25px rgba(0,0,0,0.75)",
        floating: "0 30px 70px -30px rgba(0,0,0,0.85)",
        glow: "0 0 0 1px #1C2A44, 0 0 40px rgba(245,119,153,0.25)",
      },

      /* =========================
         ANIMATIONS (UNCHANGED)
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
        scroll: {
          to: {
            transform: "translate(calc(-50% - 2rem))",
          },
        },
      },

      animation: {
        shimmer: "shimmer 2s linear infinite",
        fadeIn: "fadeIn 0.4s ease-out",
        spotlight: "spotlight 2s ease",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
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
