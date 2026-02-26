/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          deep: '#021D40',
          medium: '#021D40',
        },
        accent: {
          yellow: '#F2BB16',
          red: '#F23D4C',
          purple: '#A75CF2',
          gray: '#F2F2F2',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'glass': '20px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(2,29,64,0.1)',
        'glow': '0 0 30px rgba(242,187,22,0.3)',
      },
      backdropBlur: {
        'glass': '20px',
      },
    },
  },
  plugins: [],
}
