const webpackValidator = require('webpack-validator');
const resolve = require('path').resolve;

module.exports = () => {
  return webpackValidator({
    context: resolve('src'),
    entry: './bootstrap.js',
    output: {
      path: resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/dist/',
    },
  })
};
