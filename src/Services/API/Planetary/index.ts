// #region Local Imports
import { Http } from "@Services/API/Http";
// #endregion Local Imports

export const PlanetaryService = {
    GetPlanetImage: async (
        payload: Planetary.GetApodPayload
    ): Promise<Planetary.GetApodResponse> => {
        let response: Planetary.GetApodResponse;

        try {
            response = await Http.Request<Planetary.GetApodResponse>(
                "GET",
                "/planetary/apod",
                payload.params
            );
        } catch (error) {
            response = {
                copyright: "",
                date: "",
                explanation: "",
                hdurl: "",
                service_version: "",
                title: "",
                url: "",
            };
        }

        return response;
    },
};
