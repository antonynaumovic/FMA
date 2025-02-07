/** @type {import('next').NextConfig} */

import next from 'next';

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/FMA/' : '',
  basePath: isProd ? '/FMA' : '',
  output: 'export'
};


// const nextConfig = {
//     basePath: "/FMA",
//     assetPrefix: '/FMA/',
//     output: "export",  // <=== enables static exports
//   };

const withTM = require('next-transpile-modules')(['three']);

module.exports = withTM(nextConfig);

export default nextConfig
