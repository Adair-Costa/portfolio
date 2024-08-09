/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '200px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      backgroundColorDark: '#351F39',
      backgroundColorLight: '#FFF3E1',
      colorDark: '#ECCCF2',
      colorLight: '#7C684B',
      backgroundColorDefault: '#ffffff',
      colorDefault: '#522E24',
      pink: '#E492AB',
      brown: '#724E44'
    },
    extend: {
      fontFamily: {
        title: ['Philosopher', 'sans-serif'],
        body: ['Kodchasan', 'sans-serif'],
        logo: ['Righteous', 'sans-serif']
      }
    },
  },
  plugins: [],
};
