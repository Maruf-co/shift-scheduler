/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https', //https://lh3.googleusercontent.com/V0YvtlUy_LcYx-yEaTiTo62MsE2IKkWg8hTIuPw2oCiHuBIjFu-t6wlakxxakQ=w600
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https', //https://i.ibb.co/pR3sdjz/Accepting-Cover-Requests.jpg
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
