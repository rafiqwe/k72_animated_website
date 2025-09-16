/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [new URL('https://k72.ca/**')],
  }
};

export default nextConfig;
