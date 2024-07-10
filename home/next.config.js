const { BLOG_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/blog",
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: "/blog/:path*",
        destination: `${BLOG_URL}/blog/:path*`,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/blog/:path*",
        headers: [
          {
            key: "x-forwarded-host",
            value: "https://getarchieai.com",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
