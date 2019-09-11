import { WithTranslation } from "next-i18next";

declare namespace IErrorPage {
    export interface IProps extends WithTranslation {
        statusCode?: number;
    }

    export interface InitialProps {
        namespacesRequired: string[];
    }
}
