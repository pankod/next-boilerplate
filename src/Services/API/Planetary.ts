//#region Local Imports
import { Http } from '@Services';
import { PlanetaryModel } from '@Interfaces';
//#endregion Local Imports

export const PlanetaryService = {
	GetPlanetImage: async (
		payload: PlanetaryModel.GetApodPayload,
	): Promise<PlanetaryModel.GetApodResponse> => {
		let response: PlanetaryModel.GetApodResponse;

		try {
			response = await Http.Request<PlanetaryModel.GetApodResponse>(
				'GET',
				'/planetary/apod',
				payload.params,
			);
		} catch (error) {
			response = {
				copyright: '',
				date: '',
				explanation: '',
				hdurl: '',
				service_version: '',
				title: '',
				url: '',
			};
		}

		return response;
	},
};
