const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
// TODO
const PolyFill = '@babel/polyfill';
const webpack = require('webpack');

const dotenv = require('dotenv').config({ path: `${__dirname}/.env` });

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

const dotEnvPlugin = new webpack.DefinePlugin({
  'process.env': JSON.stringify(dotenv.parsed),
});

module.exports = {
  entry: [PolyFill, './src/index.js'],
  output: {
    // NEW
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  }, // NEW Ends
  plugins: [htmlPlugin, dotEnvPlugin],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          esModule: false,
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
};
