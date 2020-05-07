declare namespace Planetary {
    interface ApodPayload {
        hd?: boolean;
        [key: string]: any;
    }

    interface ApodResponse {
        copyright: string;
        date: string;
        explanation: string;
        hdurl: string;
        service_version: string;
        title: string;
        url: string;
    }

    interface GetApodPayload {
        params: ApodPayload;
    }

    interface GetApodResponse extends ApodResponse {}
}
