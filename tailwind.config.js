const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "colors": {
        "bkg-main-dark": "#1C1917",
        "blancFond" : "#E6E9EE",
        // Ici vos couleurs exportées de Figma
      },
      "fontFamily": {
        "aquire": "Aquire",
        "orkney": "Orkney"
      },
      "backgroundImage": {
        "main-pattern" : "url('/images/background-main.jpg')",
      },
      "fontSize" : {
        "common" : "25px",
        "common2" : "50px"
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
  ],
};
