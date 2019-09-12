// #region Global Imports
import { WithTranslation } from "next-i18next";
// #endregion Global Imports

declare namespace IErrorPage {
    export interface IProps extends WithTranslation {
        statusCode?: number;
    }

    export interface InitialProps {
        namespacesRequired: string[];
    }
}
