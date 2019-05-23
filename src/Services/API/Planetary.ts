//#region Local Imports
import { Http } from '@Services';
import { IHomePage, PlanetaryModel } from "@Interfaces";
//#endregion Local Imports


export const PlanetaryService = {

	GetPlanetImage: async (payload: PlanetaryModel.GetApodPayload): Promise<PlanetaryModel.GetApodResponse> => {

		const response = await Http.Request<PlanetaryModel.GetApodResponse>(
			'GET',
			'/planetary/apod',
			payload.params
		);

		return response;
	}
}