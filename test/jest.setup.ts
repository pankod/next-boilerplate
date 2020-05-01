// #region Global Imports
import dotenv from "dotenv";
import nock from "nock";
import { setConfig } from "next/config";
import "jest-styled-components";
import "@testing-library/jest-dom";
// #endregion Global Imports

dotenv.config({ path: ".env.test" });

setConfig({
    publicRuntimeConfig: {
        API_URL: process.env.API_URL,
        API_KEY: process.env.API_KEY,
    },
});

nock("http://localhost:3000")
    .get("/api/planetary/apod")
    .query({ api_key: "NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo", hd: true })
    .reply(200, {
        copyright: "Pankod",
        date: "2019-05-23",
        explanation: "",
        hdurl: "",
        media_type: "",
        service_version: "",
        title: "",
        url: "",
    });

nock("http://localhost:3000")
    .get("/api/planetary/apod")
    .query({ api_key: "NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo", hd: false })
    .reply(500);

nock("http://localhost:3000")
    .get("/api/200")
    .reply(200, { success: true });

nock("http://localhost:3000")
    .get("/api/404")
    .reply(404, { success: false });
