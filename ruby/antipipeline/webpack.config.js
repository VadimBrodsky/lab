'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs');

const prod = process.argv.indexOf('-p') !== -1;
const css_output_template = prod ? 'stylesheets/[name]-[hash].css' : 'stylesheets/[name].css';
const js_output_template = prod ? 'javascripts/[name]-[hash].js' : 'javascripts/[name].js';

module.exports = {
  context: `${__dirname}/app/assets/javascripts`,
  entry: {
    application: './application.js',
  },
  output: {
    path: `${__dirname}/public`,
    filename: js_output_template,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin(css_output_template),
    function() {
      this.plugin('done', (stats) => {
        let output = `ASSET_FINGERPRINT = \"${stats.hash}\"`;
        fs.writeFileSync('config/initializers/fingerprint.rb', output, 'utf8');
      });
    }
  ]
};
