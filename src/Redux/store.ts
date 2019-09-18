// #region Global Imports
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
// #endregion Global Imports

// #region Interface Imports
import Reducers from "./Reducers";
// #endregion Interface Imports

export const store = createStore(
    Reducers,
    {},
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);
