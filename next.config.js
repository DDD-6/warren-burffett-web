/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    figmaUrl: process.env.NEXT_PUBLIC_FIGMA_URL
  }
}
