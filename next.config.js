// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = isProd
  ? withPWA({
      pwa: {
        dest: 'public',
        disable: !isProd
      },
      images: {
        domains: ['localhost', 'res.cloudinary.com']
      }
    })
  : {
      images: {
        domains: ['localhost', 'res.cloudinary.com']
      }
    }
