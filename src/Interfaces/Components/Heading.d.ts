//#region Global Imports
import { Props } from 'react';
//#endregion Global Imports

declare module IHeading {
    export interface IProps extends Props<{}> {
        text: string;
    }

    export interface IState { }
}