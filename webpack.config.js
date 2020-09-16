const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	context: __dirname,
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "bundle.js",
		publicPath: "/",
	},
	devServer: {
		historyApiFallback: true,
		contentBase: path.join(__dirname, "public"),
	},
	devtool: "cheap-module-eval-source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				use: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.s?css$/,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			{
				test: /\.(png|j?g|svg|gif)?$/,
				use: "file-loader",
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, "public/index.html"),
			filename: "index.html",
		}),
	],
};
