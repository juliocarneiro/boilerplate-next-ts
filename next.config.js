const isProd = process.env.NODE_ENV === 'production'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd,
  buildExcludes: [/middleware-manifest.json$/],
  register: true,
  skipWaiting: true
})
module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ['error']
    }
  },
  images: {
    domains: ['localhost', 'res.cloudinary.com']
  }
})
