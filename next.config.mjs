/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",

    basePath: ".",

    images: {
        unoptimized: true,
    },
    
    // distDir: 'dist',
};

export default nextConfig;
