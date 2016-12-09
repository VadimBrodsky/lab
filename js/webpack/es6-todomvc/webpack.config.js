const webpackValidator = require('webpack-validator');
const resolve = require('path').resolve;

module.exports = env => {
  const config = webpackValidator({
    context: resolve('src'),
    entry: './bootstrap.js',
    output: {
      path: resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/dist/',
      pathinfo: env.dev ? true : false,
    },
    devtool: env.prod ? 'source-map': 'eval',
    module: {
      loaders: [
        { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      ],
    },
  });
  return config;
};
