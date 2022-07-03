const siteUrl = "https://www.thutasann.vercel.app";

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", disallow: "/secret" },
            { userAgent: "*", allow: "/" },
        ],
        additionalSitemaps: [
        `${siteUrl}/sitemap.xml`,
        ],
    },
    exclude: ["/secret"],
};