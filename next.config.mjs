const nextConfig = {
    trailingSlash: false,
    output: 'standalone',  // Enable standalone mode for deployment
    images: {
        unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;

