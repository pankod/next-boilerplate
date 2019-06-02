import { ApodPayload, ApodResponse } from '@Interfaces';

/**
 * @module @interface PlanetaryModel
 */
declare namespace PlanetaryModel {
    export interface GetApodPayload {
        params: ApodPayload;
    }

    export interface GetApodResponse extends ApodResponse {}
}
