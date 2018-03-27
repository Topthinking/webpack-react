var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    a: path.resolve(__dirname, './src/a.js'),
    b: path.resolve(__dirname, './src/b.js')
  },
  output: {
    path:path.resolve(__dirname, './dist'),
    filename: "[name].js",
  },
  module: {
    loaders: [
            {
              test: /\.(js|jsx)$/,
              include: path.join(__dirname, 'src'),
              exclude: /node_modules/,
              loader:'babel-loader'
            }            
          ]
  },

  plugins: [
    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {        
        'TARGET_IS_NATIVE': false,
        'TARGET_IS_NODE': true,
        'TARGET_IS_WEB': false,
        'TARGET_IS_RN': false
      }
    }),
  ]
}