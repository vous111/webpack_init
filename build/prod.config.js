const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const baseConfig = require('./base.config')
const webpackMerge = require('webpack-merge')
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = webpackMerge(baseConfig,{
  plugins:[
    new UglifyjsWebpackPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    })
  ]
})