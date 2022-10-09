/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  safelist: [
    'theme-arboretum'
  ],
  theme: {
    fontFamily: {
      'fredoka': ['Fredoka One', 'cursive'],
      'inter': ['Inter Tight', 'cursive']
    },
    colors: {
      yellow: 'yellow',
      green: 'green',
      red: 'red',
      white: '#ffffff',
      primary: 'var(--color-primary)',
      'primary-alt': 'var(--color-primary-alt)',
      secondary: 'var(--color-secondary)',
      'secondary-alt': 'var(--color-secondary-alt)'
    }
  },
  plugins: [],
}
