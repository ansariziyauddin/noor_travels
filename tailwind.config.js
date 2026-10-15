/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Instrument Sans', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        ink: '#111718', deep: '#073a3c', teal: '#0f766e', mint: '#dff7ef',
        sun: '#f3b544', coral: '#e86f51', paper: '#fbf8f1',
      },
      boxShadow: { glow: '0 26px 70px rgba(9,38,38,.16)' },
      keyframes: {
        drift: { '0%': { transform: 'scale(1.05)' }, '100%': { transform: 'scale(1.13) translate(-2%,1%)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        marquee: { '100%': { transform: 'translateX(-50%)' } },
        pulseSoft: { '50%': { transform: 'scale(1.07)', boxShadow: '0 24px 54px rgba(32,198,107,.42)' } },
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite alternate',
        float: 'float 5.6s ease-in-out infinite',
        marquee: 'marquee 34s linear infinite',
        pulseSoft: 'pulseSoft 2s infinite',
      },
    },
  },
};
