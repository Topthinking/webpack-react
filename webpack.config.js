var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/index.jsx'),
    // 将 第三方依赖 单独打包
    vendor: [
      'react', 
      'react-dom', 
      'react-redux', 
      'react-router-dom', 
      'react-router', 
      'redux', 
      'es6-promise', 
      'whatwg-fetch'
    ]
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].[chunkhash:8].js",
    publicPath: './'
  },

  resolve:{
      extensions:['.js','.jsx']
  },

  module: {
    loaders: [
            {
              test:/\.(js|jsx)$/,
              exclude:/node_modules/,
              loader:'babel-loader',
              query:{
                "presets":['react','es2015']
              }
            },
            { 
              test: /\.less$/, 
              exclude: /node_modules/, 
              loader: ExtractTextPlugin.extract({
                fallback:'style-loader', 
                use:'css-loader!postcss-loader!less-loader'
              })
            },
            { 
              test: /\.css$/, 
              exclude: /node_modules/, 
              loader: ExtractTextPlugin.extract({
                fallback:'style-loader', 
                use:'css-loader!postcss-loader'
              })
            },
            { 
              test:/\.(png|gif|jpg|jpeg|bmp)$/i, 
              loader:'url-loader?limit=5000&name=img/[name].[chunkhash:8].[ext]' 
            },  // 限制大小5kb
            { 
              test:/\.(woff|woff2|svg|ttf|eot)($|\?)/i, 
              loader:'file-loader?limit=5000&name=fonts/[name].[ext]'
            } // 限制大小小于5k    
          ]
  },

  plugins: [
    // webpack 内置的 banner-plugin
    new webpack.BannerPlugin("Copyright by topthinking@github.io."),

    new webpack.LoaderOptionsPlugin({
      options:{
        postcss:require('autoprefixer')
      }
    }),

    // html 模板插件
    new HtmlWebpackPlugin({
        template: __dirname + '/app/index.html'
    }),

    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID

    
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          //supresses warnings, usually from module minification
          warnings: false
        }
    }),
    
    // 分离CSS和JS文件
    new ExtractTextPlugin('[name].[chunkhash:8].css'), 
    
    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].[chunkhash:8].js'
    })
  ]
}