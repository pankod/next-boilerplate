declare namespace NodeJS {
    interface ProcessEnv {
        PROXY_MODE: string;
        STATIC_PATH: string;
        API_URL: string;
        API_KEY: string;
    }
}

declare namespace jest {
    interface Options {
        media?: string;
        modifier?: string;
        supports?: string;
    }

    interface Matchers<R> {
        toHaveStyleRule(property: string, value?: Value, options?: Options): R;
    }
}
