//#region Global Imports
import { Props } from 'react';
//#endregion Global Imports

declare module IHomePage {
    export interface IProps extends Props<{}>, IDispatchProps { }

    export interface IState { }
    

	export interface IDispatchProps {
		Map?(payload: Actions.IMapPayload): Actions.IMapResponse
    }
    
    module Actions {
		export interface IMapPayload {
			name?: string;
		}
		
		export interface IMapResponse { }
	}
}