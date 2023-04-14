/** @type {import('next').NextConfig} */
// next.config.js
const useHttps = require("next-https");

// You can pass options here
const withHttps = useHttps({
  enabled: process.env.NODE_ENV === "development",
});
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    return config;
  },
};



// pass your Next.js options here
module.exports = withHttps(nextConfig);
