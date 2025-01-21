/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.anifox.club'
      }
    ]
  },
  async rewrites() {
    return process.env.NODE_ENV === 'development' &&
      Boolean(process.env.USE_PROXY)
      ? [
          {
            source: '/api/:path*',
            destination: `${process.env.NEXT_PUBLIC_PROXY_HOST}:path*`
          }
        ]
      : []
  },
  async redirects() {
    return [
      {
        source: '/anime/title/:slug*',
        destination: '/anime/:slug*',
        permanent: true
      }
    ]
  }
}

export default nextConfig
