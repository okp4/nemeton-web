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
  webpack(config) {
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true } }
    config.module.rules[2].oneOf?.forEach(one => {
      if (!`${one.issuer?.and}`.includes('_app')) return
      one.issuer.and = [path.resolve()]
    })
    return config
  },
  async redirects() {
    return [
      {
        source: '/tasks',
        destination: '/validators/tasks#tasks',
        permanent: true
      },
      {
        source: '/leaderboard',
        destination: '/validators/leaderboard#leaderboard',
        permanent: true
      },
      {
        source: '/rewards',
        destination: '/validators/rewards#rewards',
        permanent: true
      },
      {
        source: '/faq',
        destination: '/validators/faq#faq',
        permanent: true
      },
      {
        source: '/terms',
        destination: '/validators/terms#terms-conditions',
        permanent: true
      }
    ]
  }
}
