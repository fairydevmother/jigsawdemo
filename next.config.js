/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ['cdn-icons-png.flaticon.com']
  },
  env: {
    API_URL: process.env.PORT,
  }
}
