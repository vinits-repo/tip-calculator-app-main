/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        "strong-cyan": "hsl(172, 67%, 45%)",
        "strong-cyan-light": "hsl(172, 67%, 70%)",
        "very-dark-cyan": "hsl(183, 100%, 15%)",
        "dark-grayish-cyan": "hsl(186, 14%, 43%)",
        "grayish-cyan": "hsl(184, 14%, 56%)",
        "light-grayish-cyan": "hsl(185, 41%, 84%)",
        "very-light-grayish-cyan": "hsl(189, 41%, 97%)",
        "medium-teal": "rgb(13, 104, 109)",
      },

      fontFamily: {
        'Space-Mono': ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
