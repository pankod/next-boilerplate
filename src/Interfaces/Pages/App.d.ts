//#region Global Imports
import { Props } from 'react';
//#endregion Global Imports

declare namespace IApp {
    export interface IProps extends Props<{}> {
        store: any;
    }

    export interface IState {}
}
