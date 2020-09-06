const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {resolve} = require('path');

const SOURCE_DIRECTORY = resolve(__dirname, './src');
const BUILD_DIRECTORY = resolve(__dirname, './docs');

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: BUILD_DIRECTORY
  },
  devtool: `source-map`,
  devServer: {
    contentBase: BUILD_DIRECTORY,
    compress: true,
    watchContentBase: true,
  },
  module: {
    rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, `${SOURCE_DIRECTORY}/*.js`),
        use: {
          loader: 'babel-loader',
          options: {
            presets: 'env'
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: `./fonts/`
          }
        }],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${SOURCE_DIRECTORY}/index.html`
    }),
    new MiniCssExtractPlugin(),
  ],
};
