import React, { FC } from 'react';
import styles from './styles.module.scss';

export interface FirstProps {
}

const First: FC<FirstProps> = (props) => {
    return (
        <div className={styles.First }>
            First
        </div>
    );
};

export default First;
