const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "colors": {
        "bkg-main-dark": "#1C1917",

        // Ici vos couleurs exportées de Figma
      },
      "fontFamily": {
        "aquire": "Aquire",
        "orkney": "Orkney"
      },
      "backgroundImage": {
        "main-pattern" : "url('/images/background-main.jpg')",
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
