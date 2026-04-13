import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.startech.com.bd',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'www.ryans.com',
        port: '',
        pathname: '/**',
      },
      {
        hostname: "ddfndelma2gpn.cloudfront.net"
      }, 
      {
        hostname: "assets.gadgetandgear.com"
      }, 
      {
        hostname: "www.mobiledokan.co"
      }
    ],
  },
};

export default nextConfig;