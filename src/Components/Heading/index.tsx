// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import styles from "./Heading.module.scss";
// #endregion Local Imports

// #region Interface Imports
import { IHeading } from "./Heading";
// #endregion Interface Imports

const Heading: React.FunctionComponent<IHeading.IProps> = (
    props
): JSX.Element => {
    const { text } = props;

    return (
        <div className={styles.title}>
            <span className={styles.title__back}>{text}</span>
            <span className={styles.title__front}>{text}</span>
        </div>
    );
};

export { Heading };
