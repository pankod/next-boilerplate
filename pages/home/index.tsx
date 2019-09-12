import * as React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { withTranslation } from "@Server/i18n";

import { IHomePage } from "./Home";

//import "./index.scss";
import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";
import { ReduxNextPageContext } from "@Interfaces";

const Container = styled.div`
    background-color: #2c3e50;
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
`;

const ContainerTop = styled.div`
    margin: 100px;
`;

const ContainerMiddle = styled.div`
    text-align: center;
    display: flex;
    flex: 1 1 100%;
    width: 100%;
    justify-content: flex-start;
`;

const ContainerMiddleLeft = styled.div`
    display: flex;
    flex: 1 1 1%;
`;

const ContainerMiddleLeftButtons = styled.div`
    background: #f9da2e;
    border-radius: 8px;
    font-family: Arial;
    font-weight: 700;
    font-size: 25px;
    color: #4b6c8d;
    letter-spacing: 0;
    width: 55px;
    height: 236px;
    margin-left: 15px;
    padding: 10px 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #4b6c8d;

    .button {
        cursor: pointer;
    }

    .active {
        color: #2c3e50;
    }
`;

const ContainerMiddleRight = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
`;

const ContainerMiddleRightApod = styled.div`
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const ContainerMiddleRightApodButton = styled.div`
    background: #f9da2e;
    border-radius: 5px;
    padding: 5px 10px;
    font-family: Arial;
    font-weight: 700;
    font-size: 25px;
    color: #2c3e50;
    letter-spacing: 0;
`;

const ContainerTopText = styled.div`
    font-size: 110px;
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
    margin-bottom: 10px;
`;

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
                    <ContainerTopText>
                        {t("common:Hello")}
                    </ContainerTopText>
                    {/* <Heading text={t("common:World")} /> */}
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
