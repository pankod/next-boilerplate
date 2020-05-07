// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import "./style.scss";
// #endregion Local Imports

export const Heading: React.FC<IHeading.IProps> = (props): JSX.Element => {
    const { text } = props;

    return (
        <div className="title">
            <span className="title__back">{text}</span>
            <span className="title__front">{text}</span>
        </div>
    );
};
