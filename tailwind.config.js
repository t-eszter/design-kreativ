/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  variants: {
    extend: {
      opacity: ['hover', 'before', 'after', 'hover:before', 'hover:after'],
      inset: ['before', 'after'],
      backgroundImage: ['before', 'after', 'hover:before', 'hover:after'],
      gradientColorStops: ['before', 'after', 'hover:before', 'hover:after'],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        'rowdies': ['Rowdies', 'cursive'],
        'kumbh': ['Kumbh Sans', 'sans-serif'],
        'gloria': ['Gloria Hallelujah', 'cursive'],
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      colors: {
        'vivamagenta': {
          900: '#bb2649',
          800: '#c5435a',
          700: '#ce5a6b',
          600: '#d6707c',
          500: '#de858e',
          400: '#e599a0',
          300: '#ecaeb2',
          200: '#f2c2c5',
          100: '#f7d6d8',
          50: '#fbebeb'
        },
        'vivapink': {
          900: '#a2316b',
          800: '#ad4879',
          700: '#b85d87',
          600: '#c37195',
          500: '#cd85a4',
          400: '#d699b2',
          300: '#dfadc1',
          200: '#e8c1d0',
          100: '#f0d6e0',
          50: '#f8eaef'
        },
        'vivapurple': {
          900: '#7b417e',
          800: '#88538b',
          700: '#956697',
          600: '#a278a4',
          500: '#b08ab1',
          400: '#bd9dbe',
          300: '#cab0cb',
          200: '#d7c4d8',
          100: '#e4d7e5',
          50: '#f2ebf2'
        },
        'vivaviolet': {
          900: '#524a7e',
          800: '#615b8b',
          700: '#716c98',
          600: '#817da4',
          500: '#928fb1',
          400: '#a4a1be',
          300: '#b5b3cb',
          200: '#c7c6d8',
          100: '#d9d8e5',
          50: '#ececf2'
        },
        'vivamidnight': {
          900: '#344c6f',
          800: '#465c7d',
          700: '#596d8b',
          600: '#6c7e99',
          500: '#8090a7',
          400: '#94a2b6',
          300: '#a9b4c4',
          200: '#bec6d3',
          100: '#d3d9e1',
          50: '#e9ecf0'
        },
        'vivanautica': {
          900: '#2f4585',
          800: '#415792',
          700: '#54699e',
          600: '#677baa',
          500: '#7c8db7',
          400: '#909fc3',
          300: '#a5b2cf',
          200: '#bbc5db',
          100: '#d1d8e7',
          50: '#e8ebf3'
      },
    },
  },
  }};