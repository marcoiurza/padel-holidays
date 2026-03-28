import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0e5b59",
          accent: "#d8a95c",
          dark: "#111417",
          light: "#f7f1e8",
          surface: "#ece5dc",
          error: "#b23c3c",
          success: "#2b7254"
        },
        status: {
          pending: "#d18b2d",
          confirmed: "#0e7c78",
          cancelled: "#a24c4c",
          paid: "#2b7254"
        }
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"]
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px"
      },
      boxShadow: {
        sm: "0 8px 24px rgba(17, 20, 23, 0.06)",
        md: "0 18px 50px rgba(17, 20, 23, 0.10)",
        lg: "0 28px 80px rgba(17, 20, 23, 0.14)",
        xl: "0 40px 110px rgba(17, 20, 23, 0.16)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(216,169,92,0.28), transparent 34%), linear-gradient(135deg, rgba(14,91,89,0.94), rgba(17,20,23,0.98))"
      }
    }
  },
  plugins: []
};

export default config;
