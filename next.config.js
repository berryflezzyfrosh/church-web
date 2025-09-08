/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com']
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/gods-light-ministry/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/gods-light-ministry' : '',
  env: {
    CUSTOM_KEY: 'gods-light-ministry'
  }
}

module.exports = nextConfig