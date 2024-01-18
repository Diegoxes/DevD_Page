/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        times: ['"Times New Roman"'],
        'primary': ['Quicksand', 'sans-serif'],
      },
      colors: {
        'blue-dark': '#384c97',
        'blue-light': '#00BFFF',
        'gray-light': '#7b868a',
        'gray-dark': '#5c6264',
        'aquamarine': '#C1F6ED',
        'primary': '#2EAF7D',
        // 'gradient-blue': 'rgb(56,76,151) to rgb(27,176,236)'
      },
      fontSize: {
        sm: '0.8rem',
        base: '1.15rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      dropShadow:{
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl':[
          '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}