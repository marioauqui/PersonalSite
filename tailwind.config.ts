import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // This line is crucial
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {} },
  plugins: [],
};
export default config;