// #region Global Imports
import * as React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import withRedux from "next-redux-wrapper";
// #endregion Global Imports

// #region Local Imports
import { AppWithStore } from "@Interfaces";
import { makeStore } from "@Redux";
import { appWithTranslation } from "@Server/i18n";

import "@Static/css/reset.scss";
import { theme } from "@Definitions/Styled";
// #endregion Local Imports

class WebApp extends App<AppWithStore> {
    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        );
    }
}

export default withRedux(makeStore)(appWithTranslation(WebApp));
