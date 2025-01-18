/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/FMA",
    output: "export",  // <=== enables static exports
  };

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()


module.exports = nextConfig
