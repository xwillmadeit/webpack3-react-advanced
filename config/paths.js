const { resolve } = require('path')

const resolveApp = src => resolve(process.cwd(), src)

module.exports = {
  appIndexJs: resolve('src/index.js'),
  appSrc: resolve('src'),
  appModules: resolve('node_modules'),
  appBuild: resolve('build'),
  appIndexHtml: resolve('src/index.html')
}
