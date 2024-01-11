/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'regal-blue': '#243c5a',
        primary: '#021e1f',
        secondary:  '#d2c0ae',
        logo:  '#b39e8a',
        'hero-button':  '#b39e8a',
        "font-color": '#032429',
        "light-font": '#687c7f',
        "divider": '#9aa7a9',
        background: '#f1f2ee',
        'secondary-background': '#f1f2ee',
      },
      fontFamily: {
        // sans: ['Roboto', 'Arial', 'sans-serif'],
        // serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'sans-serif'],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        sans: ['Noto Sans','Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
