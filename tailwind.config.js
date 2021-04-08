module.exports = {
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dykkeprat-red': '#B81F24',
        'dykkeprat-grey': '#66605B',
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  },
  plugins: [require('@tailwindcss/forms')],
}
