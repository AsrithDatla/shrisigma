/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['unpkg.com', 'cdn.jsdelivr.net', 'cdnjs.cloudflare.com'],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig