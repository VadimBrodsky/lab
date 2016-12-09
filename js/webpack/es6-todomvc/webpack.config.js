const resolve = require('path').resolve;

module.exports = () => {
  return {
    context: resolve('src'),
    entry: './bootstrap.js',
    output: {
      filename: 'bundle.js',
    },
  }
}
