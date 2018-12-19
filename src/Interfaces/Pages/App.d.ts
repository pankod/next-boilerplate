//#region Global Imports
import { Props } from 'react';
//#endregion Global Imports

declare module IApp {
    export interface IProps extends Props<{}> {
        store: any;
    }

	export interface IState { }
}