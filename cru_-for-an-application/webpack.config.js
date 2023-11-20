const path = require('path')

const autoprefixer = require('autoprefixer')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
	const { title } = env

	return {
		entry: { client: './Sources/index.js' },
		output: {
			filename: '[name].[contenthash].min.js', path: path.resolve(__dirname, '.build')
		},

		module: {
			rules: [
				{
					test: /\.scss$/,
					use: [
						{ loader: MiniCssExtractPlugin.loader },
						{ loader: 'css-loader' },
						{ loader: 'postcss-loader', options: { postcssOptions: { plugins: [autoprefixer] } } },
						{ loader: 'sass-loader' }
					]
				},
				{ test: /\.svg$/, type: 'asset/inline' }
			]
		},

		plugins: [
			new HtmlPlugin({ title: title ? { title } : title, template: 'public/index.html' }),
			new MiniCssExtractPlugin()
		],

		optimization: {
			splitChunks: {
				cacheGroups: {
					defaultVendors: {
						test: /[\\/]node_modules[\\/]/, priority: -10, reuseExistingChunks: true,
					},
					default: {
						minChunks: 2, priority: -20, reuseExistingChunks: true
					}
				}
			}
		}
	}
}
