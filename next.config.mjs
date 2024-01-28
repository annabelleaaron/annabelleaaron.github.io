/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",

    basePath: "/portfolio",

    images: {
        unoptimized: true,
    },
    
    // distDir: 'dist',
};

export default nextConfig;
