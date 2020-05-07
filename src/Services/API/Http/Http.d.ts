declare namespace HttpModel {
    interface Dictionary {
        [key: string]: any;
    }

    interface IRequestPayload extends Dictionary {}

    interface IRequestQueryPayload extends Dictionary {}
}
