const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:[
		'react-hot-loader/patch',
        'webpack-hot-middleware/client?path=/webpack-hmr&timeout=2000&quiet=true&reload=true&overlay=false',
		'./app/index.jsx'
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
			},
			{ 
				test: /\.less$/, 
				exclude: /node_modules/, 
	            loader: 'style-loader!css-loader?modules&localIdentName=[local]-[hash:base64:8]!resolve-url-loader!postcss-loader!less-loader'
			},
            { 
            	test: /\.css$/, 
            	exclude: /node_modules/, 
            	loader: 'style-loader!css-loadermodules&localIdentName=[local]-[hash:base64:8]!resolve-url-loader!postcss-loader'
            },
            { 
            	test:/\.(png|gif|jpg|jpeg|bmp)$/, 
            	loader:'url-loader?limit=1&name=images/[name].[hash:8].[ext]' 
            },  // 限制大小5kb
            { 
            	test:/\.(woff|woff2|svg|ttf|eot)($|\?)/, 
            	loader:'file-loader?name=fonts/[name].[hash:8].[ext]'
            }
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			favicon:'./app/static/images/favicon.jpg',
			template:'./app/index.html'
		}),

		new webpack.LoaderOptionsPlugin({
			options:{
				postcss:()=>{
		          return [
		            require('autoprefixer')({
		              browsers: ['last 10 versions','ie>=8','>1% in CN']
		            })
		          ]
		        }
			}
		}),

		new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),		
	]
}