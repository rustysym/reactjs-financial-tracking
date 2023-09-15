/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: { 
      backgroundImage: {
      'shapes': "url('./src/assets/images/frontshapes.png')",
      'card': "url('./src/assets/images/Card.png')",
      'illustration':"url('./src/assets/images/signinillustration.png')",
      'iconbars':"url('./src/assets/images/iconbars.png')",
      'icondiagram':"url('./src/assets/images/icondiagram.png')",
      'iconmoney':"url('./src/assets/images/iconmoney.png')",
      'iconnote':"url('./src/assets/images/iconnote.png')",
      'glassback':"url('./src/assets/images/glassback.jpg')",
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
    }},
    fontFamily: {
      'inter': ['Inter'],
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
  }),
  ],
}

