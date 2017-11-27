module.exports = {
  cssLoader: {
    loader: 'css-loader',
    options: {
      modules: true,
      importLoaders: 1,
      localIdentName: '[path][name]__[local]--[hash:base64:5]'
    }
  }
}
