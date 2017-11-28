const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')
const { cssLoader } = require('./loader')

module.exports = {
  entry: {
    app: ['react-hot-loader/patch', paths.appIndexJs]
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', cssLoader, 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true
  },
  performance: {
    hints: false
  }
}
