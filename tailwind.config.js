module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BaiJamjuree: ['Bai Jamjuree', 'sans-serif'],
      },
      backgroundImage: {
        BgHeader:"url(./images/bg-header-desktop.png)",
      },
      colors: {
        StrongCyan: 'hsl(171, 66%, 44%)',
        LightBlue: 'hsl(233, 100%, 69%)',
        Cinza: 'hsl(220, 18%, 97%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}