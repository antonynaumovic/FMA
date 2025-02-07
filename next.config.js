// @ts-check

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/FMA/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/FMA' : '',
  

  output: 'export'
};


const withTM = require('next-transpile-modules')(['three']);

module.exports = nextConfig;

