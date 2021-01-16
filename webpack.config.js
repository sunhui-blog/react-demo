const webpack = require('webpack')
const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8091',
    './src/index.js'
  ], // 打包入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }, // 打包输出文件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello React'
    })
  ]
}

module.exports = config
