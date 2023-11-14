/* Initially Modified: 06:27 PM Wed 08 Nov 2023
        Last Modified: 07:02 PM Wed 08 Nov 2023
*/

const path = require('path')

const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
  return {
    entry: {
      bundle: './Sources/index.js', bootstrap: ''
    },
    output: {
      path: path.resolve(__dirname, '.build'),
      filename: '[name].[contenthash].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            { loader: miniCssExtractPlugin.loader },
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: { postcssOptions: { plugins: [autoprefixer] } }
            },
            { loader: 'sass-loader' }
          ]
        },
        {
          test: /\.svg$/,
          type: 'asset/inline'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: env.TITLE_FOR_CRU__FOR_AN_APPLICATION, template: 'public/index.html'
      }),
      new miniCssExtractPlugin()
    ],
    optimization: { // Initially Modified at 8:16 AM on Tue 14 Nov 2023.
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunks: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunks: true
          }
        }
      }
    }
  }
}
