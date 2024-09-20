/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// module.exports = {
//   theme: {
//     extend: {
//       screens: {
//         '2xl': '1536px',
//         '4k': '2560px', // Add a custom 4K screen size
//       },
//     },
//   },
// };