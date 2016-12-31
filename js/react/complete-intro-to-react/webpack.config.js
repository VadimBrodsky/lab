const path = require('path');

module.exports = {
  context: __dirname,
  entry: './js/clientApp.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devtool: 'eval-source-map',
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'semistandard-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  performance: {
    hints: false
  }
};
