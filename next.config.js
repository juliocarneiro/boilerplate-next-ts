const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ['error']
    },
    styledComponents: true
  },
  images: {
    domains: ['localhost', 'res.cloudinary.com']
  }
}

module.exports = nextConfig
