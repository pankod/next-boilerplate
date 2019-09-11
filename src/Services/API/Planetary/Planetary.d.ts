import { ApodPayload, ApodResponse } from "@Interfaces";

declare namespace PlanetaryModel {
    export interface GetApodPayload {
        params: ApodPayload;
    }

    export interface GetApodResponse extends ApodResponse {}
}
