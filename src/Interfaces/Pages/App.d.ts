// #region Global Imports
import { Store } from "redux";
import { AppInitialProps } from "next/app";
import { NextPageContext } from "next";
import { ThunkDispatch } from "redux-thunk";
// #endregion Global Imports

interface AppWithStore extends AppInitialProps {
    store: Store;
}

interface ReduxNextPageContext extends NextPageContext {
    store: {
        dispatch: ThunkDispatch;
    };
}
