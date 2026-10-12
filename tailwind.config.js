/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#07101E',
          900: '#0B192C',
          850: '#0F2139',
          800: '#132845',
          700: '#1E3E62',
          600: '#285180',
          500: '#386FA4',
        },
        safety: {
          700: '#B83E00',
          600: '#D94E00',
          500: '#FF6500',
          400: '#FF7D29',
          100: '#FFF2EB',
          50: '#FFF8F5',
        },
        graphite: {
          950: '#090D16',
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          200: '#E2E8F0',
          100: '#F1F5F9',
          50: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(255, 101, 0, 0.4)',
        'glow-navy': '0 0 30px -5px rgba(11, 25, 44, 0.5)',
        'card-subtle': '0 4px 20px -2px rgba(11, 25, 44, 0.06)',
      }
    },
  },
  plugins: [],
}
