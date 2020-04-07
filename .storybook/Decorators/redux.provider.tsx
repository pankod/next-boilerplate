// #region Global Imports
import { Provider } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { makeStore } from '@Redux';
// #endregion Local Imports

export const withRedux = () => (story: any) => (
    <Provider store={makeStore({
        home: {
            version: 1,
        },
        image: {
            url: "",
        },
    })}> {story()}</Provider >
);
