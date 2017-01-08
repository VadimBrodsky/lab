var path = require('path');

var config = {
  entry: ['./src/app.tsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  devtool: 'source-map',
  performance: {
    hints: false
  },
  resolve: {
    extensions: [".ts", ".tsx", "styl", ".js"]
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/ },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader', exclude: /node_modules/ }
    ]
  }
};

module.exports = config;
