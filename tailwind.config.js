/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        gold: {
          light: '#D4AF37',
          DEFAULT: '#B8860B',
          dark: '#8B6508',
        },
      },
      boxShadow: {
        'elegant': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
        'elegant-lg': '0 10px 30px -3px rgba(0, 0, 0, 0.1)',
        'inner-elegant': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
        },
        '.rotate-x': {
          transform: 'rotateX(180deg)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};