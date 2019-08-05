// eslint-disable-next-line @typescript-eslint/no-var-requires
const theme = require('tailwindcss/defaultTheme')

module.exports = {
  plugins: [
    function({ addUtilities, addBase }) {
      const newBaseStyles = {}
      const newUtilities = {
        '.transition-all': {
          transition: 'all 250ms ease-in-out',
        },
        '.transition-opacity': {
          transition: 'opacity 250ms ease-in-out',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
      addBase(newBaseStyles)
    },
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      fontSize: {
        0: '0rem',
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '6/10': '60%',
        '3/4': '75%',
        full: '100%',
      },
      minWidth: {
        '1/2': '50%',
      },
      listStyleType: {
        square: 'square',
        'leading-zero': 'decimal-leading-zero;',
      },
    },
    variants: {
      borderWidth: ['responsive', 'hover'],
    },
  },
}
