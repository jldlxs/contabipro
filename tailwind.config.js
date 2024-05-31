/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'brand': '#0B3F7E',
      },
      fontFamily:{
        'tommyregular': 'made_tommyregular',
        'tommybold': 'made_tommymedium',
      }
    },
  },
  plugins: [
        // require('@tailwindcss/forms'),
        require('@tailwindcss/typography'), 
        // require('flowbite/plugin')    
  ],
};
