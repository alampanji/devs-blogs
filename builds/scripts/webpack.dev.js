const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../../public/'),
    port: 8888,
    publicPath: 'http://localhost:8888/dist/',
    hotOnly: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ], // used for hot reloading when developing
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
})