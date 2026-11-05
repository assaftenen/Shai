import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#06080a",
        panel: "#0d1117",
        panel2: "#121820",
        lime: "#c6ff1e",
        limedim: "#8fd400",
        teal: "#2bd1c9",
      },
      fontFamily: {
        heebo: ["var(--font-heebo)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -5px rgba(198,255,30,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
