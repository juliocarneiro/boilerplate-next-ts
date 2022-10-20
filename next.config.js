const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['localhost', 'res.cloudinary.com']
  }
}

module.exports = nextConfig
