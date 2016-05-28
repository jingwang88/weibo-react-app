var webpack = require('webpack');
var path = require('path');
var debug = process.env.NOD_ENV !== "production";
module.exports = {
	context: __dirname,
	devtool: debug ? "inline-sourcemap" : null,
	entry: './component/client.js',
	output: {
		path: __dirname + '/src/',
		filename: 'client.min.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0',
				exclude: /(node_modules|bower_components)/
			},
			{
				test: /\.css$/,
				loader: 'styel!css'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			}
		]
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
}
