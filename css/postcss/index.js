const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const webpInCss = require('webp-in-css/plugin')
const gradientPolyfill = require('postcss-gradient-polyfill')
const fs = require('fs')

fs.readFile('src/index.css', (err, css) => {
  postcss([autoprefixer, webpInCss({modules: false}), gradientPolyfill({fallback: 'mixed'})])
    .process(css, { from: 'src/index.css', to: 'dist/index.css' })
    .then(result => {
      fs.writeFile('dist/index.css', result.css, () => true)
      if ( result.map ) {
        fs.writeFile('dist/index.css.map', result.map, () => true)
      }
    })
})
