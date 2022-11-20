/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./_layouts/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            'main' : '#282c37',
            'second' : '#8298a0',
            'side-color' : '#313541',
            'side-active' : '#72cdd2',
            'icon-color' : '#647d80'
         }
      },
   },
   plugins: [
      require('@tailwindcss/typography'),
   ],
};
