import colors from 'windicss/colors';
import { defineConfig } from 'windicss/helpers';
import plugin from 'windicss/plugin';

const { transform } = require('windicss/helpers');

export default defineConfig({
  content: [
    './src/**/*.svelte',
    './src/**/*.html',
    './src/**/*.js',
    // './node_modules/flowbite-svelte/**/*.svelte',
    // './node_modules/flowbite-svelte/**/*.html',
    // './node_modules/flowbite-svelte/**/*.js',
  ],
  darkMode: 'class', // or 'media'
  safelist: [
    'shadow-lg'
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        // col,
        gray: colors.slate,
        blue: colors.sky,
        //  red: colors.pink,
        pink: colors.fuchsia,
        primary: {
          light: '#3896d3',
          DEFAULT: '#2980b9',
          dark: '#226998',
        },
        parker: {
          50: '#579086',
          100: '#4d867c',
          200: '#437c72',
          300: '#397268',
          400: '#2f685e',
          500: '#255e54',
          600: '#1b544a',
          700: '#114a40',
          800: '#074036',
          900: '#00362c'
        },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          128: '32rem',
          144: '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
      },
    },
  },
  plugins: [
    plugin(function ({
      addUtilities
    }) {
      const newUtilities = {
        '.safe-top': {
          paddingTop: '0.25rem'
        },
        '.safe-left': {
          paddingLeft: '0.25rem'
        },
        '.safe-right': {
          paddingRight: '0.25rem'
        },
        '.safe-bottom': {
          paddingBottom: '0.25rem'
        }
      }

      addUtilities(newUtilities);
    }),
    plugin(({
      addComponents
    }) => {
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          marginRight: '.25rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-link': {
          padding: '.5rem 1rem',
          marginRight: '.25rem',
          borderRadius: '.25rem',
          fontWeight: '600',
          textAlign: 'center',
        },
        '.btn-blue': {
          'backgroundColor': '#3490dc',
          'color': '#fff',
          '&:hover': {
            backgroundColor: '#2779bd',
          },
          '&.active': {
            backgroundColor: '#075985',
          },
          '&[disabled]': {
            backgroundColor: '#d4d4d8',
          },
        },
        '.btn-red': {
          'backgroundColor': '#e3342f',
          'color': '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a',
          },
        },
      }
      addComponents(buttons)
    }),
    plugin(({
      addDynamic,
      variants
    }) => {
      addDynamic('skew', ({
        Utility,
        Style
      }) => {
        return Utility.handler
          .handleStatic(Style('skew'))
          .handleNumber(0, 360, 'int', number => `skewY(-${number}deg)`)
          .createProperty('transform')
      }, variants('skew'))
    }),
    require('@windicss/plugin-animations')({
      settings: {
        animatedSpeed: 500,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
    // require('@windicss/plugin-icons'),
	  // transform('daisyui'),
    require('windicss/plugin/filters'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/typography')({
      modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    }),
  ],
})