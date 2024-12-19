import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "checkbox-blue": '#1755FF',
        "checkbox-gray-border": '#949494',
        foreground: "var(--foreground)",
      },
      borderWidth: {
        DEFAULT: '1px',
      }
    },
  },
  plugins: [],
} satisfies Config;
