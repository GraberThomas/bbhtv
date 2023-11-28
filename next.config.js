const { prototype } = require('postcss')
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.brest.life',
                pathname: '/assets/**',
            },
        ],
    },
}

module.exports = nextConfig
