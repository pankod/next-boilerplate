const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withBundleAnalyzer = require("@next/bundle-analyzer");

const nextConfig = {
    analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
        server: {
            analyzerMode: "static",
            reportFilename: "../bundles/server.html",
        },
        browser: {
            analyzerMode: "static",
            reportFilename: "../bundles/client.html",
        },
    },
};

module.exports = withPlugins(
    [[withCSS], [withSass], [withBundleAnalyzer]],
    nextConfig
);
