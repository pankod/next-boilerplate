//#region Global Imports
import App, { Container } from 'next/app';
import * as React from 'react';

import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
//#endregion Global Imports

//#region Local Imports
import store from '@Redux/store';
//#endregion Local Imports

//#region Interface Imports
import { IApp } from '@Interfaces';
//#endregion Interface Imports

class MyApp extends App<IApp.IProps> {
    static async getInitialProps(props: any) {
        let pageProps = {};

        if (props.Component.getInitialProps) {
            pageProps = await props.Component.getInitialProps(props.ctx);
        }

        return { pageProps };
    }


    render(): JSX.Element {
        const { Component, pageProps, store } = this.props;

        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default withRedux(store)(MyApp);