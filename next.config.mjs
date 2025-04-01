/** @type {import('next').NextConfig} */
const nextConfig = {
// output: 'export',
// basePath: '/helpcenter',
    trailingSlash: true,
    images: {
        unoptimized: true, //Disables image optimization for static export
    },
    eslint: {
        ignoreDuringBuilds: true, //Ignores ESLint errors during the build process
    },
};
export default nextConfig;

