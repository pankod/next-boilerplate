//#region Global Imports
import { Dispatch } from "redux";
//#endregion Global Imports

//#region Local Imports
import { ActionConsts } from "@Definitions";
import { PlanetaryService } from "@Services";
//#endregion Local Imports

//#region Interface Imports
import { IHomePage } from "@Interfaces";
//#endregion Interface Imports

export const HomeActions = {
    Map: (payload: {}) => ({
        payload,
        type: ActionConsts.Home.SetReducer,
    }),

    Reset: () => ({
        type: ActionConsts.Home.ResetReducer,
    }),

    GetApod: (payload: IHomePage.Actions.IGetApodPayload) => async (
        dispatch: Dispatch
    ) => {
        dispatch({
            payload: {
                image: {},
            },
            type: ActionConsts.Home.SetReducer,
        });

        const result = await PlanetaryService.GetPlanetImage({
            params: payload.params,
        });

        dispatch({
            payload: {
                image: result,
            },
            type: ActionConsts.Home.SetReducer,
        });
    },
};
