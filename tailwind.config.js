/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fcfaff',
          100: '#f5f3ff',
          200: '#e9e2f7',
          300: '#ddd6fe',
          500: '#6d28d9',
          600: '#5b21b6',
          700: '#4c1d95',
          900: '#24163a',
        },
        accent: '#be5c8a',
        ink: '#24163a',
        mist: '#675f78',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 45px rgba(76, 29, 149, 0.12)',
        card: '0 10px 30px rgba(36, 22, 58, 0.08)',
      },
      backgroundImage: {
        'hero-fade': 'linear-gradient(90deg, rgba(36, 22, 58, 0.82) 0%, rgba(36, 22, 58, 0.55) 42%, rgba(36, 22, 58, 0.18) 100%)',
      },
    },
  },
  plugins: [],
};
