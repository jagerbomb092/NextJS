/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: () => {
    return [
      {
        source: "/cats",
        destination: "https://meowfacts.herokuapp.com",
      },
      {
        source: "/ducks",
        destination: "https://random-d.uk/api/random",
      },
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
