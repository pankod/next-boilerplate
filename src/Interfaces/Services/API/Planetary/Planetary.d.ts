import { ApodPayload, ApodResponse } from "@Interfaces";

/**
* @module @interface PlanetaryModel
*/
declare module PlanetaryModel {
    export interface GetApodPayload {
        params: ApodPayload;
    }

	export interface GetApodResponse extends ApodResponse { }
}