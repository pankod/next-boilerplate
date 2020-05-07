// #region Global Imports
import { WithTranslation } from "next-i18next";
// #endregion Global Imports

export namespace IErrorPage {
    interface IProps extends WithTranslation {
        statusCode?: number;
    }

    interface InitialProps {
        namespacesRequired: string[];
    }
}
