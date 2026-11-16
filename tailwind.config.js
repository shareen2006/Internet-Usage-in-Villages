/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dg: '#051D04',
        lemon: '#FCF9C6',
        forest: '#245C35',
        mist: '#F2F5E8',
        ink: '#26352A',
        earth: '#8B6F47',
        clay: '#C4956A',
        sky: '#D4E8C2',
        gold: '#F5C842',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        telugu: ['"Noto Sans Telugu"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px -12px rgba(5,29,4,0.18)',
        glow: '0 0 40px -8px rgba(36,92,53,0.35)',
        card: '0 4px 24px -4px rgba(5,29,4,0.12)',
        strong: '0 20px 60px -12px rgba(5,29,4,0.3)',
      },
      backgroundImage: {
        'gradient-village': 'linear-gradient(135deg, #051D04 0%, #245C35 50%, #3d7a4f 100%)',
        'gradient-mist': 'linear-gradient(180deg, #F2F5E8 0%, #ffffff 100%)',
        'gradient-earth': 'linear-gradient(135deg, #F2F5E8 0%, #FCF9C6 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        'pulse-soft': { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.7' } },
      },
    },
  },
  plugins: [],
};
