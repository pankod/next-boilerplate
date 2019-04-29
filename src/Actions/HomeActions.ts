import { ActionConsts } from "@Definations";

/**
 * ACTIONS
*/
export const HomeActions = {
	Map: (payload: any) => (
		{
			payload,
			type: ActionConsts.Home.SetReducer
		}
	),

	Reset: () => ({
		type: ActionConsts.Home.ResetReducer
	})
}