module.exports = {
  purge: ["**/*.{html, js, php}", "./node_modules/flowbite/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'captcha': ['"Nanum Brush Script"', 'cursive'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
