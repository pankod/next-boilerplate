// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { FooterProps } from "./Footer";
// #endregion Local Imports

const Footer: React.FunctionComponent<FooterProps> = (
    props: FooterProps
): JSX.Element => {
    return <div className="footer">Footer</div>;
};

export { Footer };
