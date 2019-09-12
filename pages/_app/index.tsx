import * as React from "react";

import App from "next/app";
import { Provider } from "react-redux";

import { makeStore } from "@Redux";
import { appWithTranslation } from "@Server/i18n";

import withRedux from "next-redux-wrapper";

import "@Static/css/reset.scss";
import { AppWithStore } from "./app";

class WebApp extends App<AppWithStore> {
    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default withRedux(makeStore)(appWithTranslation(WebApp));
