declare namespace NodeJS {
    interface ProcessEnv {
        PROXY_MODE: string;
        STATIC_PATH: string;
        API_URL: string;
        API_KEY: string;
    }
}
