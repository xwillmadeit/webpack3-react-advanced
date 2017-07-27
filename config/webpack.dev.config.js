const webpack = require('webpack')
const paths = require('./paths')

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
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    historyApiFallback: true
  }
}
