const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const paths = require('./paths')

module.exports = {
  entry: {
    app: [require.resolve('./polyfills'), paths.appIndexJs],
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: 'js/[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('autoprefixer')({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9'
                    ]
                  })
                ]
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/style.[contentHash:8].css'),
    // if use moment.js, exclude the large locale
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  devtool: 'source-map'
}
