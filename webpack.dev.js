const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './example/src/index.html'),
  filename: './index.html'
})

const devConfig = {
  entry: path.join(__dirname, 'example/src/index.tsx'),
  output: {
    path: path.join(__dirname, 'example/dist'),
    filename: 'bundle.js'
  },
  plugins: [htmlWebpackPlugin],
  devServer: {
    port: 3002
  }
}

module.exports = merge(require('./webpack.common'), devConfig)