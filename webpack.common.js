const path = require('path')

const cssRule = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader', 'postcss-loader'],
  exclude: /node_modules/
}
const jsRule = {
  test: /\.(js | jsx)$/,
  use: 'babel-loader',
  exclude: /node_modules/
}
const tsRule = {
  test: /\.ts(x?)$/,
  use: 'ts-loader',
  exclude: /node_modules/
}

module.exports = {
  module: {
    rules: [jsRule, tsRule, cssRule]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
}