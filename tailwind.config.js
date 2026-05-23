/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#008037",
          dark: "#006B2D",
          light: "#1DB954",
        },

        forest: {
          900: "#021E12",
          800: "#014421",
          700: "#006B2D",
        },

        background: {
          DEFAULT: "#F7F8FA",
          secondary: "#FFFFFF",
          pitch: "#2D9B4D",
          "pitch-dark": "#247A3C",
        },

        text: {
          primary: "#111827",
          secondary: "#6B7280",
          muted: "#9CA3AF",
        },

        success: "#16A34A",
        warning: "#F59E0B",
        danger: "#DC2626",

        border: "#E5E7EB",
        card: "#FFFFFF",

        points: "#00C853",
        captain: "#111111",
        viceCaptain: "#1E40AF",

        nigeria: {
          green: "#008751",
          white: "#FFFFFF",
        },
      },

      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #021E12 0%, #014421 60%, #006B2D 100%)",

        "pitch-gradient": "linear-gradient(180deg, #2D9B4D 0%, #247A3C 100%)",
      },

      boxShadow: {
        card: "0 2px 10px rgba(0,0,0,0.06)",
        soft: "0 4px 20px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        card: "16px",
        button: "12px",
        player: "8px",
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        stats: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
