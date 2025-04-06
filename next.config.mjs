/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn-images-1.medium.com"],
  },
  async headers() {
    return [
      {
        source: '/(.*)', // apply to all routes
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
