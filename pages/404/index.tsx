// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { Container, TopText, HomeButton } from "@Styled/404";
import Link from "next/link";
// #endregion Local Imports

// #region Interface Imports
import { IErrorPage } from "@Interfaces";
// #endregion Interface Imports

const Custom404: NextPage<IErrorPage.IProps> = ({ t }) => {
    return (
        <Container>
            <TopText>{t("common:NotFound")}</TopText>
            <Link href="/">
                <HomeButton>{t("common:BackHome")}</HomeButton>
            </Link>
        </Container>
    );
};

export default withTranslation("common")(Custom404);
