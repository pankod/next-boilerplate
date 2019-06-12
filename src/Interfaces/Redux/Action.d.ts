//#region Global Imports
import { Action as ReduxAction } from 'redux';
//#endregion Global Imports

export interface IAction<T> extends ReduxAction {
	payload?: T;
}
