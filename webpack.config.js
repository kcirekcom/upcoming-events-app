'use strict';

const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');

let plugins = [
  new HTMLPlugin({
    template: `${__dirname}/src/index.html`
  }),
  new webpack.LoaderOptionsPlugin({
    sassLoader: {
      includePaths: [`${__dirname}/src/scss`]
    }
  })
];

module.exports = {
  entry: './src/index.jsx',
  devtool: 'eval',
  plugins,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['transform-class-properties']
          }
        }
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }]
      }
    ]
  }
};