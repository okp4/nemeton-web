/** @type {import('next').NextConfig} */
const path = require('path')
const pkg = require('./package.json')

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  publicRuntimeConfig: {
    version: pkg.version
  },
  webpack(config) {
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true } }
    config.module.rules[2].oneOf?.forEach(one => {
      if (!`${one.issuer?.and}`.includes('_app')) return
      one.issuer.and = [path.resolve()]
    })
    return config
  }
}
