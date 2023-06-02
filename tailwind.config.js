/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      fontFamily: {
        sans: ['var(--font-bungee-shade)'],
      },
    },
  },
  plugins: [],
};
