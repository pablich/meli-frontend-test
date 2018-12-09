const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.config.common.js');

// Con el merge fusionamos el archivo dev con el common
module.exports = merge(common, {
  // Para poder ver los errores
  devtool: 'inline-source-map',
  // Para poder hacer el hot loading
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'app'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'react-hot-loader',
      },
    ],
  },
});
