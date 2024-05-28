/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_RESAS_API_KEY: process.env.NEXT_PUBLIC_RESAS_API_KEY,
    },
};
export default nextConfig;
