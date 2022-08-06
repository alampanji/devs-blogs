// webpack.config.js'
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "main.css",
  chunkFilename: "main.[hash].css"
})

module.exports = {
  plugins: [
    miniCssExtractPlugin
  ],
  entry: path.join(__dirname, '../../src/index.tsx'), // our entry point, as mentioned earlier
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/, // matches .js, .ts, and .tsx files
        loader: 'swc-loader', // uses swc-loader for the specified file types (no ts-loader needed)
        exclude: /node_modules/, 
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          'postcss-loader'
        ], 
      },
      {
        test: /\.(jpe?g|svg|png|gif|ico|eot|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.less'],
    alias: {
      '@': path.resolve(__dirname, '../../src/'),
      '@components': path.resolve(__dirname, '../../src/components'),
      '@pages': path.resolve(__dirname, '../../src/pages'),
    },
  },
  output: {
    filename: 'bundle.js', // our output bundle
  },
  devtool: 'eval-source-map', // builds high quality source maps
}