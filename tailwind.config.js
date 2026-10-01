/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: 'var(--color-primary)',
        ink: 'var(--color-text)',
        mist: 'var(--color-text-muted)',
      },
      fontFamily: {
        display: ['var(--font-heading)'],
        sans: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
};
