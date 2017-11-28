const { resolve } = require('path')

const resolveApp = src => resolve(process.cwd(), src)

module.exports = {
  appIndexJs: resolveApp('src/index.js'),
  appSrc: resolveApp('src'),
  appComponents: resolveApp('src/components'),
  appUtils: resolveApp('src/utils'),
  appModules: resolveApp('node_modules'),
  appBuild: resolveApp('build'),
  appIndexHtml: resolveApp('src/index.html')
}
