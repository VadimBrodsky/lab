const webpackValidator = require('webpack-validator');
const resolve = require('path').resolve;

module.exports = () => {
  return webpackValidator({
    context: resolve('src'),
    entry: './bootstrap.js',
    output: {
      filename: 'bundle.js',
    },
  })
};
