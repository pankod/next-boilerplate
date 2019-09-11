//#region Global Imports
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch, Store } from "redux";
//#endregion Global Imports

//#region Local Imports
import { HomeActions } from "@Actions";
import "./index.scss";
//#region Local Imports

//#region Interface Imports
import { IHomePage, IStore } from "@Interfaces";
import { withTranslation } from "@Server/i18n";
import { NextPageContext } from "next";
//#endregion Interface Imports

interface Swag extends NextPageContext {
    store: {
        dispatch: Function;
    };
}

export class HomePage extends React.Component<IHomePage.IProps> {
    static async getInitialProps(ctx: Swag) {
        await ctx.store.dispatch(
            HomeActions.GetApod({
                params: { hd: true },
            })
        );

        return { namespacesRequired: ["common"] };
    }

    renderLocaleButtons = (activeLanguage: string) =>
        ["en", "es", "tr"].map(lang => (
            <div
                key={lang}
                className={`button ${lang} ${
                    activeLanguage === lang ? "active" : ""
                }`}
                onClick={() => this.changeLanguage(lang)}
            >
                {lang}
            </div>
        ));

    public render(): JSX.Element {
        console.log(this.props);
        const { t, i18n } = this.props;

        return (
            <div className="container">
                <div className="container__top">
                    <img src="/static/images/pankod-logo.png" />
                </div>
                <div className="container__middle">
                    <div className="container__middle__left">
                        <div className="container__middle__left__buttons">
                            {this.renderLocaleButtons(i18n.language)}
                        </div>
                    </div>
                    <div className="container__middle__right">
                        <span className="container__top_text">
                            {t("common:Hello")}
                        </span>
                        <img src={this.props.image.url} />
                        {/* <Heading text={t('common:World')} /> */}
                    </div>
                </div>
            </div>
        );
    }

    private changeLanguage(lang: string): void {
        this.props.i18n.changeLanguage(lang);
    }
}

const mapStateToProps = (state: IStore) => state.home;

const mapDispatchToProps = (dispatch: Dispatch) => ({
    Map: bindActionCreators(HomeActions.Map, dispatch),
});

const Extended = withTranslation(["common"])(HomePage);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Extended);
