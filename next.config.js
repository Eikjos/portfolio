const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV == "production" ? "/portfolio" : "",
  assetPrefix: process.env.NODE_ENV == "production" ? "/portfolio" : "",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
