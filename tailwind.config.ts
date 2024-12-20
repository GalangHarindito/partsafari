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
        "header-blue": '#281E9B',
        background: "var(--background)",
        'background-main': '#F8F8F8',
        foreground: "var(--foreground)",
        'tab-active': "#D2E3DF",
        'tab-font-active': "#004736",
        'tab-inactive': "#E8E2E2"
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      borderRadius: {
        'none': '0',
        'round-30px': '1.875rem',
      },
      padding: {
        '12.5': '3.125rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
