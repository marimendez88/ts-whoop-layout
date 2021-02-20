module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  important: true,
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      primary: {
        100: '#7094AB',
        200: '#597483',
        300: '#4B6271',
        400: '#27343A',
        500: '#1A2327'
      },
      blue: {
        100: '#55D3FE',
        200: '#3C94E7',
        300: '#337DCD',
        400: '#255DA4',
        600: '#132E60'
      },
      gray: {
        100: '#FAFAFA',
        200: '#C8C8C8',
      },
      aqua: '#00f19f',
      green: '#43CB02',
      yellow: '#F9DE01',
      red: '#ED2F0E',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  variants: {
    extend: {},
  },
  plugins: [],
}
}
