// #region Global Imports
import { WithTranslation } from "next-i18next";
// #endregion Global Imports

export namespace IHomePage {
    interface IProps extends WithTranslation {}

    interface InitialProps {
        namespacesRequired: string[];
    }

    interface IStateProps {
        home: {
            version: number;
        };
        image: {
            url: string;
        };
    }

    namespace Actions {
        interface IMapPayload {}

        interface IMapResponse {}

        interface IGetApodPayload extends Planetary.GetApodPayload {
            params: {};
        }

        interface IGetApodResponse extends Planetary.GetApodResponse {}
    }
}
