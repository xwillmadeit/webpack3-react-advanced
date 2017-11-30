const webpack = require('webpack')
const paths = require('./paths')

module.exports = {
  output: {
    path: paths.appBuild
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: 'eslint-loader',
        include: paths.appSrc
      },
      {
        test: /\.jsx?$/,
        exclude: paths.appModules,
        use: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: 'url-loader?limit=10000&name=images/[name].[hash:8].[ext]'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [new webpack.ProgressPlugin()],
  resolve: {
    // 如果不在 extensions 数组指定后缀，引入时必须写全后缀
    // https://webpack.js.org/configuration/resolve/#resolve-extensions
    extensions: ['.js', '.json', '.jsx', '.css', '.scss'],
    alias: {
      '@components': paths.appComponents,
      '@util': paths.appUtil
    }
  }
}
