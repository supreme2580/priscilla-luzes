module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../asset/images/luzes.jpg')",
        smallHero: "url('../asset/images/priscilla.jpg')"
      }
    },
  },
  plugins: [],
}