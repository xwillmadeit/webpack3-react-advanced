const { resolve } = require('path')

const resolveApp = src => resolve(process.cwd(), src)

module.exports = {
  appIndexJs: resolveApp('src/index.js'),
  appSrc: resolveApp('src'),
  appComponents: resolveApp('src/components'),
  appUtil: resolveApp('src/util'),
  appModules: resolveApp('node_modules'),
  appBuild: resolveApp('build'),
  appHtml: resolveApp('src/index.html')
}
