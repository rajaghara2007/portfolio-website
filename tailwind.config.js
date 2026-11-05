/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#030306',
          deep: '#010103',
          surface: '#07080d',
          card: 'rgba(10, 12, 18, 0.75)',
          border: 'rgba(245, 158, 11, 0.15)',
        },
        bat: {
          black: '#020204',
          dark: '#08090f',
          charcoal: '#0f1118',
          armor: '#171a24',
          titanium: '#242938',
          gold: '#f59e0b',
          'gold-light': '#fbbf24',
          'gold-dark': '#d97706',
          amber: '#f59e0b',
          crimson: '#ef4444',
          blood: '#dc2626',
          cyan: '#00f5ff',
          blue: '#38bdf8',
        },
        cyber: {
          blue: '#38bdf8',
          cyan: '#00f5ff',
          violet: '#818cf8',
          purple: '#c084fc',
          gold: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Syne', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'bat-gradient': 'linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(239, 68, 68, 0.08), rgba(0, 245, 255, 0.08))',
        'bat-radar': 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
        'bat-carbon': 'repeating-linear-gradient(45deg, #090a10 0, #090a10 2px, #050609 2px, #050609 4px)',
      },
      boxShadow: {
        'bat-gold': '0 0 25px -4px rgba(245, 158, 11, 0.45)',
        'bat-gold-lg': '0 0 45px -5px rgba(245, 158, 11, 0.6)',
        'bat-red': '0 0 25px -4px rgba(239, 68, 68, 0.45)',
        'bat-cyan': '0 0 25px -4px rgba(0, 245, 255, 0.4)',
        'tactical': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(245, 158, 11, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bat-signal': 'batSignal 8s ease-in-out infinite alternate',
        'radar-sweep': 'radarSweep 4s linear infinite',
        'scanline': 'scanline 6s linear infinite',
        'beacon': 'beacon 2s ease-in-out infinite',
      },
      keyframes: {
        batSignal: {
          '0%': { transform: 'rotate(-8deg) scale(0.95)', opacity: '0.4' },
          '50%': { transform: 'rotate(5deg) scale(1.05)', opacity: '0.85' },
          '100%': { transform: 'rotate(-4deg) scale(1)', opacity: '0.5' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        beacon: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.98)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
