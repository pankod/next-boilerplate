//#region Global Imports
import { Props } from 'react';
//#endregion Global Imports

declare module IHomePage {
	export interface IOwnProps extends Props<{}> { }

    export interface IState { }
	
	export interface IStateProps { }
	
	export interface IDispatchProps {
		Map(payload: Actions.IMapPayload): Actions.IMapResponse
    }
    
	export type IProps = IOwnProps & IStateProps & IDispatchProps;

    module Actions {
		export interface IMapPayload { }
		
		export interface IMapResponse { }
	}
}