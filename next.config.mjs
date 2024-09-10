import { glob } from 'glob'

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@anifox/ui'].flatMap((spec) =>
    glob.sync(`${spec}`, { cwd: 'node_modules/' })
  ),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.anifox.club'
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_PROXY_HOST}:path*`
      }
    ]
  }
}

export default nextConfig
