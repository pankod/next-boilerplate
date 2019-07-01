//#region Global Imports
import { Props } from 'prop-types';
//#endregion Global Imports

//#region Interface Imports
import { IStore } from '@Interfaces/Redux/Store';
//#region Interface Imports

declare namespace IApp {
	export interface IProps extends Props<{}> {
		store: IStore;
	}

	export interface IState {}
}
