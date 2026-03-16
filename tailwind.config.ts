import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#7422AA',
        'brand-dark': '#2F2D2D',
        'brand-light-gray': '#D3D3D3',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'source-code': ['Source Code Pro', 'monospace'],
      },
      spacing: {
        '180': '180px',
      },
    },
  },
  plugins: [],
};

export default config;
