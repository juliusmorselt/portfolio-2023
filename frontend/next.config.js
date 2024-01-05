/** @type {import('next').NextConfig} */

require("dotenv").config()
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['cdn.sanity.io']
    },
    // env: {
    //     NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    // }
}

module.exports = nextConfig
