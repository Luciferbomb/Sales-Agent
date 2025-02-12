/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:8000',
  },
  async rewrites() {
    // Ensure backendUrl always has http:// or https:// prefix
    let backendUrl = process.env.BACKEND_URL || 'http://localhost:8000';
    if (!backendUrl.startsWith('http://') && !backendUrl.startsWith('https://')) {
      backendUrl = `https://${backendUrl}`;
    }
    return [{
      source: '/api/:path*',
      destination: `${backendUrl}/:path*`,
    }];
  },
};

// Use ES module export syntax since type: module is set in package.json
export default nextConfig; 