/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:[],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        body:['Nunito']
      },
      screens: {
        screens: {
          'tablet': '640px',
          // => @media (min-width: 640px) { ... }
    
          'laptop': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'desktop': '1280px',
        }
      },
    },
  },
  plugins: [],
  
    darkMode: 'class',
   
  
  
 
}