/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "storage.googleapis.com" },
      { protocol: "https", hostname: "assets.vercel.com" },
    ],
  },
};

module.exports = nextConfig;
