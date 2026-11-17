import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'drpet.com.ec' },
      { protocol: 'https', hostname: 'www.drpet.com.ec' },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
    outputFileTracingRoot: projectRoot,
  },
};

export default nextConfig;
