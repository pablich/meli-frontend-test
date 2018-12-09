const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.config.common.js');

// Con el merge fusionamos el archivo dev con el common
module.exports = merge(common, {
  // Para poder ver los errores
  devtool: 'inline-source-map',
  // Para poder hacer el hot loading
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'app'),
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'react-hot-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.join(__dirname, 'public/assets'),
        use: ['file-loader'],
      },
    ],
  },
});
