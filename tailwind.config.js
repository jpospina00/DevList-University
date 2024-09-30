/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      primary0: "#229799",
      primary1: "#62b5b7",
      primary2: "#99cfd0",
      disable: "#fdf5f5",
      secondary0: "#214455",
      secondary0Hover: "#227b98",
      secondary1: "#f4f6f7",
      secondary2: "#99a9b1",
      third0: "#a1b6b7",
      third1: "#bccbcc",
      third2: "#d4ddde",
      background: "#f8f9fa",
      text: "#212529",
      accent: '#ffc107',
      dark: '#000000',
    },
      extend: {
        fontFamily:{
          'montserrat':['Montserrat','sans-serif']}
      }
  },
  variants: {},
  plugins: []
}