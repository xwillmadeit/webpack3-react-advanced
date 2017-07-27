const webpackMerge = require('webpack-merge')
const commonConfig = require('./config/webpack.common.config')

const addons = addonsArg => {
  let addonFiles = [].concat(addonsArg).filter(Boolean)
  return addonFiles.map(addon => require(`./config/addons/webpack.${addon}`))
}

module.exports = env => {
  const envConfig = require(`./config/webpack.${env.env}.config`)
  return webpackMerge(commonConfig, envConfig, ...addons(env.addons))
}
