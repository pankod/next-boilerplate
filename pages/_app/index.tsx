import * as React from "react";

import App from "next/app";
import { Provider } from "react-redux";

import { store } from "@Redux";
import { appWithTranslation } from "@Server/i18n";

import "@Static/css/reset.scss";

class WebApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default appWithTranslation(WebApp);
