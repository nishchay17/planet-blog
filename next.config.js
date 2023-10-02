/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
  experimental: {
    serverActions: true,
  }
}

module.exports = withContentlayer(nextConfig)