import { ActionConsts } from "@Definations";

/**
 * ACTIONS
*/
export const HomeActions = {
	Map : payload => ({
		payload,
		type: ActionConsts.Home.SetReducer
	}),

	Reset : () => ({
		type: ActionConsts.Home.ResetReducer
	})
}