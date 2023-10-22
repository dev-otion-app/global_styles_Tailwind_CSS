/** @type {import('tailwindcss').Config} */
import globals from "./includes/global_styles.json" assert {type:"json"};
module.exports = {
  content: [
    "./index.html"
  ],
  theme: 
  {
    container:
    {
      center:true
    },
    extend: 
    {
      typography: theme=>globals
    }
  },
  plugins: 
  [
    require('@tailwindcss/typography')
  ]
}