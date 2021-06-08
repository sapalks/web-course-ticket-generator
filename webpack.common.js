const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.scss'],
    alias: {
      api: path.resolve(__dirname, 'src/api'),
      components: path.resolve(__dirname, 'src/components'),
      pages: path.resolve(__dirname, 'src/pages'),
      store: path.resolve(__dirname, 'src/store'),
      utils: path.resolve(__dirname, 'src/utils'),
      styles: path.resolve(__dirname, 'src/styles'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template/index.html',
    }),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL || 'http://localhost:3000'),
    }),
  ],
};

module.exports = config;
