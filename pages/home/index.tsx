import * as React from "react";
import { NextPage, NextPageContext } from "next";
import { useSelector, useDispatch } from "react-redux";

import { withTranslation } from "@Server/i18n";

import { IHomePage } from "./Home";

import "./index.scss";
import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({
    t,
    i18n,
}) => {
    const home = useSelector((state: IStore) => state.home);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(HomeActions.GetApod);
        console.log(home);
    });

    const renderLocaleButtons = (activeLanguage: string) =>
        ["en", "es", "tr"].map(lang => (
            <div
                key={lang}
                className={`button ${lang} ${
                    activeLanguage === lang ? "active" : ""
                }`}
                onClick={() => i18n.changeLanguage(lang)}
            >
                {lang}
            </div>
        ));

    return (
        <div className="container">
            <div className="container__top">
                <img src="/static/images/pankod-logo.png" alt="Pankod Logo" />
            </div>
            <div className="container__middle">
                <div className="container__middle__left">
                    <div className="container__middle__left__buttons">
                        {renderLocaleButtons(i18n.language)}
                    </div>
                </div>
                <div className="container__middle__right">
                    <span className="container__top_text">
                        {t("common:Hello")}
                    </span>
                    {/* <Heading text={t("common:World")} /> */}
                    <span className="container__middle__right__apod">
                        <span
                            className="container__middle__right__apod__button"
                            onClick={() => {
                                dispatch(
                                    HomeActions.GetApod({
                                        params: { hd: true },
                                    })
                                );
                            }}
                        >
                            Get A Photo
                        </span>
                        <img
                            src={home.image.url}
                            height="300"
                            width="150"
                            alt="APOD"
                        />
                    </span>
                </div>
            </div>
        </div>
    );
};

Home.getInitialProps = async (
    ctx: NextPageContext
): Promise<IHomePage.InitialProps> => {
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Home);

export default Extended;
