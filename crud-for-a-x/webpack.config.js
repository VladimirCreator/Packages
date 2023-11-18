const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = (env, argv) => {
	const isDevelopment = argv.mode === 'development'
	const isProduction = !isDevelopment

	const title = { env }

	return {
		entry: {
			client: './Sources/CRUD for a X/index.mjs'
		},
		output: {
			filename: '[name].[contenthash].min.js', path: path.resolve(__dirname, '.build'),
			clean: true
		},

		module: {
			rules: [
				{
					test: /\.m?js$/, exclude: /node_modules/,
					use: 'babel-loader'
				},
				{
					test: /\.scss$/,
					use: [
						MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
					]
				}
			]
		},

		plugins: [
			new HtmlPlugin({ title: title ? { title } : title, template: 'index.html' }),
			new MiniCssExtractPlugin({ filename: '[name].[contenthash].min.css' })
		]
	}
}
