const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:[
		'react-hot-loader/patch',
    	'webpack-hot-middleware/client?path=/webpack-hmr&timeout=2000&quiet=true&reload=true&overlay=false',
		'./src/main.js'
	],
	output:{
		filename: '[name].js',
		publicPath: "/",
	},
	resolve:{
		extensions:['.js','.jsx']
	},
	module:{
		loaders:[
			{
				test:/\.(js|jsx)$/,
				exclude:/node_modules/,
				loader:'babel-loader'
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			favicon:'./public/favicon.ico',
			template:'./public/index.html'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),		
	]
}