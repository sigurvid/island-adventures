/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // If your site lives in a subfolder (e.g. example.com/island/), set basePath: '/island'
  // basePath: '',
};

module.exports = nextConfig;
