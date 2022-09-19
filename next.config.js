/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
const env = {
  JWT_KEY: "km5seXH2jFJOK2y8s7I8MDyrQ9JAiW05O9ePamkAZFgYSgbBzd",
  DB_NAME: "nathan",
  DB_PASSWORD: "99M2PHgvB7wEeaJd",
};

module.exports = {
  nextConfig,
  env,
};
