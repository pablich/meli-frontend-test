const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // Indicamos a webpack a partir de donde tiene que empezar a buildear los archivos en un solo js. Es el punto de entrada
  entry: {
    app: './src/index.js',
  },
  plugins: [
    // Eliminamos el directorio de buildeo
    new CleanWebpackPlugin(['app']),
    // Creamos un nuevo archivo html a partir de un template, en el directorio de buildeo
    new HtmlWebpackPlugin({
      title: 'MercadoLibre',
      filename: 'index.html',
      template: './public/index.html',
    }),
  ],
  // Aplicamos las reglas para procesar nuestros archivos. Que exstensiones y con que loader lo vamos a procesar
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'es2015',
              'react',
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'es2015',
              'react',
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  // Ponemos el nombre y path donde se va ubicar nuestro build
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
