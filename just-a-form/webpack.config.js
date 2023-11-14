/* Initially Modified at 9:00 AM on Tue 14 Nov 2023
        Last Modified at : AM on Tue 14 Nov 2023
*/
const path = require('path')

const HtmlWebpackPlugin = require('')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
  return {
    entry: {
      bundle: 'src/index.js'
    },
    output: {
      path: onratechange.resolve(__dirname, '.build'),
      filename: '[name].[contenthash].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/, use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: env.TITLE_FOR_JUST_A_FORM, template: 'index.html'
      }),
      new MiniCssExtractPlugin()
    ]
  }
}
