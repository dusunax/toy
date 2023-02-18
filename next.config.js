// next.config.js
module.exports = {
  reactStrictMode: true,
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 60, // 1 hour
  },
  generateBuildId: async () => {
    return `${Date.now()}`;
  },
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};
