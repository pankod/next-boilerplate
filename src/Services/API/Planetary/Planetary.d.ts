// #region Interface Imports
import { ApodPayload, ApodResponse } from "@Interfaces";
// #endregion Interface Imports

declare namespace PlanetaryModel {
    export interface GetApodPayload {
        params: ApodPayload;
    }

    export interface GetApodResponse extends ApodResponse {}
}

export { PlanetaryModel };
