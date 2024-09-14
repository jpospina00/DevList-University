/ @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    colors: {
      primary0: "#229799",
      primary1: "#62b5b7",
      primary2: "#99cfd0",
      disable: "#fdf5f5",
      secondary0: "#214455",
      secondary1: "#617a86",
      secondary2: "#99a9b1",
      third0: "#a1b6b7",
      third1: "#bccbcc",
      third2: "#d4ddde",
      background: "#f8f9fa",
      text: "#212529",
      accent: '#ffc107',
      dark: '#000000',
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      screens: {
        'ssm': '340px',
        'sm': '400px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

