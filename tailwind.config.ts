import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        alpine: {
          DEFAULT: '#1e3a5f',
          light: '#2d5a8a',
          dark: '#152a45',
        },
        accent: { black: '#0f172a' },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-geist-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
