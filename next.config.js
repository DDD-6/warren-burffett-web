/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    path:`${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API_URL}`,
    loader: 'imgix',
  },
  env: {
    figmaUrl: process.env.NEXT_PUBLIC_FIGMA_URL,
    SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    SERVER_PROTOCOL: process.env.NEXT_PUBLIC_SERVER_PROTOCOL,
    API_PROTOCOL: process.env.NEXT_PUBLIC_API_PROTOCOL,
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  pageExtensions: ['page.tsx', 'page.jsx', 'tsx'],
  eslint: {
    ignoreDuringBuilds: true
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      ...defaultPathMap,
    }
  },
  trailingSlash: true
}
