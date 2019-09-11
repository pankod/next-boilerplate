import * as React from "react";

import App from "next/app";
import { Provider } from "react-redux";

import store from "@Redux/Store";
import { appWithTranslation } from "../../server/i18n";

import "../../static/css/reset.scss";

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
