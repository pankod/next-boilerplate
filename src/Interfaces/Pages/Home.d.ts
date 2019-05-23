//#region Global Imports
import { Props } from 'react';
//#endregion Global Imports

//#region Interfaces Imports
import { PlanetaryModel } from '@Interfaces';
//#endregion Interfaces Imports

declare module IHomePage {
	export type IProps = IOwnProps & IStateProps & IDispatchProps;

	export interface IOwnProps extends Props<{}> { }

	export interface IState { }

	export interface IStateProps { }

	export interface IDispatchProps {
		Map(payload: Actions.IMapPayload): Actions.IMapResponse
		GetApod(payload: Actions.IGetImagePayload): Actions.IGetImageResponse;
	}

	module Actions {
		export interface IMapPayload { }

		export interface IMapResponse { }

		export interface IGetApodPayload extends PlanetaryModel.GetApodPayload { }

		export interface IGetApodResponse extends PlanetaryModel.GetApodResponse { }
	}
}