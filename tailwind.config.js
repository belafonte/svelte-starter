module.exports = {
  important: true,
  purge: [
    './src/*.html',
    './src/*.svelte',
    './src/components/*.svelte',
    './src/routes/*.svelte',
  ],
  theme: {
    typography: {
      default: {
        css: {
          color: '#fff',
          a: {
            color: '#fff',
            '&:hover': {
              color: '#fff',
            },
          },
          h1: {
            color: '#fff',
          },
          h2: {
            color: '#fff',
          },
          h3: {
            color: '#fff',
          },
          h4: {
            color: '#fff',
          }
        },
      },
    },
    extend: {}
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
};
