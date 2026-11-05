/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          bg: '#04050d',
          deep: '#020308',
          surface: 'rgba(14, 18, 36, 0.75)',
          card: 'rgba(20, 26, 52, 0.65)',
          cardHover: 'rgba(28, 36, 70, 0.8)',
          border: 'rgba(139, 92, 246, 0.25)',
          borderHover: 'rgba(168, 85, 247, 0.5)',
          purple: '#a855f7',
          violet: '#8b5cf6',
          indigo: '#6366f1',
          cyan: '#00f5ff',
          blue: '#38bdf8',
          pink: '#ec4899',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'neon-purple': '0 0 25px -4px rgba(168, 85, 247, 0.6)',
        'neon-cyan': '0 0 25px -4px rgba(0, 245, 255, 0.6)',
        'neon-blue': '0 0 25px -4px rgba(56, 189, 248, 0.6)',
        'pill-glow': '0 0 20px rgba(139, 92, 246, 0.6), inset 0 0 10px rgba(139, 92, 246, 0.3)',
        'planet-glow': '0 -15px 60px rgba(0, 245, 255, 0.6), 0 -5px 25px rgba(56, 189, 248, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-delayed': 'float 5s ease-in-out 2.5s infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
