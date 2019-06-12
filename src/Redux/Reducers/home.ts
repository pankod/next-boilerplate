//#region Global Imports
//#endregion Global Imports

//#region Local Imports
import { ActionConsts } from '@Definations';
//#endregion Local Imports

//#region Interface Imports
import { IAction, IHomePage } from '@Interfaces';
//#endregion Interface Imports

/**
 * INITIAL_STATE
 */
const INITIAL_STATE: IHomePage.IStateProps = {
	home: {
		version: 1,
	},
};

type IMapPayload = IHomePage.Actions.IMapPayload;

/**
 * REDUCER
 */
/* eslint-disable complexity */
export const HomeReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
	switch (action.type) {
		case ActionConsts.Home.SetReducer:
			return {
				...state,
				...action.payload,
			};

		case ActionConsts.Home.ResetReducer:
			return INITIAL_STATE;

		default:
			return state;
	}
};
/* eslint-enable complexity */
