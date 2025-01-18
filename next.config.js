/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: "",
    output: "export",  // <=== enables static exports
  };

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()


module.exports = nextConfig
