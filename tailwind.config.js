/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { fontFamily: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        '10xl': '10rem', // Custom size example
        '12xl': '12rem', // Custom size example
      },
      signature: ["Great Vibes"]
    }
  },
  },
  plugins: [require('@tailwindcss/typography'),],
}

