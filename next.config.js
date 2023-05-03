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
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/validators/rewards',
        destination: '/rewards'
      },
      {
        source: '/builders/rewards',
        destination: '/rewards'
      },
      {
        source: '/validators/faq',
        destination: '/faq'
      },
      {
        source: '/builders/faq',
        destination: '/faq'
      },
      {
        source: '/validators/terms',
        destination: '/terms'
      },
      {
        source: '/builders/terms',
        destination: '/terms'
      }
    ]
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
