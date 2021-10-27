/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    figmaUrl: process.env.NEXT_PUBLIC_FIGMA_URL,
    SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    SERVER_PROTOCOL: process.env.NEXT_PUBLIC_SERVER_PROTOCOL
  }
}
