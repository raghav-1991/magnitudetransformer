/** @type {import('next').NextConfig} */
const nextConfig = {
    // Allows a local production build check without touching the dev server's .next folder
    distDir: process.env.NEXT_DIST_DIR || ".next",
    // Old template URLs → new Magnitude pages
    async redirects() {
        return [
            { source: "/about", destination: "/about-us", permanent: true },
            { source: "/contact", destination: "/contact-us", permanent: true },
            { source: "/service", destination: "/services", permanent: true },
            { source: "/faq", destination: "/services", permanent: false },
            { source: "/team", destination: "/about-us", permanent: false },
            { source: "/projects", destination: "/gallery", permanent: false },
        ]
    },
}

module.exports = nextConfig
