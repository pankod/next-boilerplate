//#region Global Imports
import { Action as ReduxAction } from 'redux';
import { Props } from 'react';
//#endregion Global Imports

//#region Interface Imports
import { IHomePage } from '@Interfaces';
//#endregion Interface Imports

export interface IAction<T> extends ReduxAction {
    payload?: T;
}
