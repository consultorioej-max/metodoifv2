/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(37, 99, 235, 0.18)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.2) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}
