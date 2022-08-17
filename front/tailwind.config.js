/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'loginPageBg':"url('../public/images/loginBg.jpg')",
        'profilePageBg':"url('../public/images/profileBg.jpg')"
      }
    },
  },
  plugins: [],
}
