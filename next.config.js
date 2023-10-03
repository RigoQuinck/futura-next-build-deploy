/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/futura-next-build-deploy",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
