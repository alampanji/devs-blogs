const { merge } = require('webpack-merge')
const { resolve, join } = require('path');
const common = require('./webpack.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    // filename: 'js/bundle.[fullhash].min.js',
    path: join(__dirname, '../../dist'),
    filename: 'js/[name].bundle.[fullhash].min.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // template file
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
})