/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'example.com',
      'another-domain.com',
      'hebbkx1anhila5yf.public.blob.vercel-storage.com',
    ],
  },
}

module.exports = nextConfig
