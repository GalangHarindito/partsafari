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
