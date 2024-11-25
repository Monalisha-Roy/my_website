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
        'text': '#e4f5fb',
        'background': 'black',
        'primary': '#ADC4CE',
        'secondary': '#7AB2D3',
        'accent': '#87A2FF',
       },
            
    },
  },
  plugins: [],
} satisfies Config;
