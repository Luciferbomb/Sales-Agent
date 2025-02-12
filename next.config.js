/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:8000',
  },
  async rewrites() {
    // Get backend URL from environment or use default
    let backendUrl = process.env.BACKEND_URL || 'salesai-backend';
    
    // Ensure backendUrl always has http:// or https:// prefix
    if (!backendUrl.startsWith('http://') && !backendUrl.startsWith('https://')) {
      backendUrl = `https://${backendUrl}`;
    }
    
    return [{
      source: '/api/:path*',
      destination: `${backendUrl}/:path*`,
    }];
  },
};

module.exports = nextConfig; 