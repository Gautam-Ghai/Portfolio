/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgYellow: '#F8F7F0',
        iconGreen: '#29706B',
        iconYellow: '#EEC046',
        iconRed: '#F26440',
        textGreen: '#0C2F3F',
        stackOverflow: '#F48225',
        twitter: '#1DA1F2',
        linkedin: '#0277B5',
        github: '#333'
      }
    },
  },
  plugins: [],
}
