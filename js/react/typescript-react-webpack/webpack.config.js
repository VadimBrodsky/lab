var path = require('path');

var config = {
  entry: ['./src/app.tsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
