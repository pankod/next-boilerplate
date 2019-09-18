import next from "next";
import express from "express";
import nextI18NextMiddleware from "next-i18next/middleware";

import nextI18next from "./i18n";
import routes from "./routes";
import devProxy from "./proxy";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
    const server = express();

    server.use(nextI18NextMiddleware(nextI18next));

    if (process.env.PROXY_MODE === "local") {
        const proxyMiddleware = require("http-proxy-middleware");
        Object.keys(devProxy).forEach(function(context) {
            server.use(proxyMiddleware(context, devProxy[context]));
        });
    }

    server.get("*", (req, res) => handler(req, res));

    server.listen(port);

    console.log(
        `> Server listening at http://localhost:${port} as ${
            dev ? "development" : process.env.NODE_ENV
        }`
    );
});
