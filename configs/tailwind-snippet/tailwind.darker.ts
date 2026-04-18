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
          .map((c) => c + c)
          .join("")
      : normalized;

  const num = Number.parseInt(value, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;

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
         DARK-FIRST COLOR SYSTEM
      ========================== */
      colors: {
        /* Core dark canvas */
        background: {
          DEFAULT: "#091413",
        },

        foreground: "#EAF4EF",

        /* Primary brand (green tech dark SaaS) */
        primary: {
          DEFAULT: "#285A48",
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
          foreground: "#FFFFFF",
        },

        secondary: {
          DEFAULT: "#408A71",
          foreground: "#FFFFFF",
        },

        accent: {
          DEFAULT: "#B0E4CC",
          foreground: "#091413",
        },

        /* Surfaces for depth layering */
        card: {
          DEFAULT: "#0E1C1A",
          foreground: "#EAF4EF",
        },

        popover: {
          DEFAULT: "#102420",
          foreground: "#EAF4EF",
        },

        muted: {
          DEFAULT: "#0F201D",
          foreground: "#A7C9BD",
        },

        border: "#1F3A34",
        input: "#1F3A34",
        ring: "#408A71",

        destructive: {
          DEFAULT: "#E45858",
          foreground: "#FFFFFF",
        },

        success: "#285A48",
        warning: "#E9C46A",

        black: "#091413",
        white: "#FFFFFF",
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

      /* =========================
         RADIUS
      ========================== */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        panel: "1.75rem",
        pill: "9999px",
      },

      /* =========================
         BACKGROUNDS (DARK GRADIENT SYSTEM)
      ========================== */
      backgroundImage: {
        "main-gradient":
          "radial-gradient(circle at top, #102420 0%, #091413 60%, #050B0A 100%)",

        "surface-panel": "linear-gradient(135deg, #0E1C1A 0%, #102420 100%)",

        "surface-soft": "linear-gradient(180deg, #0F201D 0%, #091413 100%)",

        "glow-primary":
          "radial-gradient(circle at center, rgba(64,138,113,0.25) 0%, transparent 70%)",
      },

      /* =========================
         SHADOWS (DARK MODE DEPTH)
      ========================== */
      boxShadow: {
        soft: "0 10px 25px -18px rgba(0,0,0,0.8)",
        panel: "0 20px 40px -25px rgba(0,0,0,0.9)",
        glow: "0 0 0 1px rgba(64,138,113,0.2), 0 0 40px rgba(64,138,113,0.15)",
      },

      /* =========================
         ANIMATIONS
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
    addVariablesForColors,
    addDesignTokens,

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
   CSS VAR EXPORT
========================= */
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));

  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

/* =========================
   DESIGN TOKENS EXPORT
========================= */
function addDesignTokens({ addBase, theme }: any) {
  addBase({
    ":root": {
      "--radius-panel": theme("borderRadius.panel"),
      "--space-section": theme("spacing.section"),
      "--space-section-lg": theme("spacing.section-lg"),
      "--space-stack": theme("spacing.stack"),
      "--primary-rgb": hexToRgbString(theme("colors.primary.DEFAULT")),
      "--accent-rgb": hexToRgbString(theme("colors.accent.DEFAULT")),
    },
  });
}

export default config;
