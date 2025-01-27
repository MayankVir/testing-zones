const { BLOG_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
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
        source: "/blog/",
        destination: `${BLOG_URL}/blog/`,
      },
      {
        source: "/blog/:path*",
        destination: `${BLOG_URL}/blog/:path*`,
      },
      {
        source: "/blog/:path*/",
        destination: `${BLOG_URL}/blog/:path*/`,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/blog",
        headers: [
          {
            key: "x-forwarded-host",
            value: "https://testing-zones-idmw.vercel.app",
          },
        ],
      },
      {
        source: "/blog/:path*",
        headers: [
          {
            key: "x-forwarded-host",
            value: "https://testing-zones-idmw.vercel.app",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
