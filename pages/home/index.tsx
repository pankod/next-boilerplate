import * as React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";

import { withTranslation } from "@Server/i18n";

import { IHomePage } from "./Home";

import {
    Container,
    ContainerMiddle,
    ContainerMiddleLeft,
    ContainerMiddleLeftButtons,
    ContainerMiddleRight,
    ContainerMiddleRightApod,
    ContainerMiddleRightApodButton,
    ContainerTop,
    ContainerTopText,
} from "./styled";

import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";
import { ReduxNextPageContext } from "@Interfaces";
import { Heading } from "@Components";

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({
    t,
    i18n,
}) => {
    const home = useSelector((state: IStore) => state.home);
    const dispatch = useDispatch();

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
        <Container>
            <ContainerTop>
                <img src="/static/images/pankod-logo.png" alt="Pankod Logo" />
            </ContainerTop>
            <ContainerMiddle>
                <ContainerMiddleLeft>
                    <ContainerMiddleLeftButtons>
                        {renderLocaleButtons(i18n.language)}
                    </ContainerMiddleLeftButtons>
                </ContainerMiddleLeft>
                <ContainerMiddleRight>
                    <ContainerTopText>{t("common:Hello")}</ContainerTopText>
                    <Heading text={t("common:World")} />
                    <ContainerMiddleRightApod>
                        <ContainerMiddleRightApodButton
                            onClick={() => {
                                dispatch(
                                    HomeActions.GetApod({
                                        params: { hd: false },
                                    })
                                );
                            }}
                        >
                            Get A Photo
                        </ContainerMiddleRightApodButton>
                        <img
                            src={home.image.url}
                            height="300"
                            width="150"
                            alt="APOD"
                        />
                    </ContainerMiddleRightApod>
                </ContainerMiddleRight>
            </ContainerMiddle>
        </Container>
    );
};

Home.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IHomePage.InitialProps> => {
    await ctx.store.dispatch(
        HomeActions.GetApod({
            params: { hd: true },
        })
    );
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Home);

export default Extended;
