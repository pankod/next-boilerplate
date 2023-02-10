import * as React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";

import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
import { AboutActions } from "@Actions";
import { Heading, LocaleButton } from "@Components";

import { IAbout, ReduxNextPageContext } from "@Interfaces";

const About: NextPage<IAbout.IProps, IAbout.InitialProps> = ({
    t,
    i18n,
}) => {
    const About = useSelector((state: IStore) => state.About);
    const dispatch = useDispatch();

    const renderLocaleButtons = (activeLanguage: string) =>
        ["en", "es", "tr"].map(lang => (
            <LocaleButton
                key={lang}
                lang={lang}
                isActive={activeLanguage === lang}
                onClick={() => i18n.changeLanguage(lang)}
            />
        ));

    return (
        <div>
            {renderLocaleButtons(i18n.language)}
        </div>
    );
};

About.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IAbout.InitialProps> => {
    await ctx.store.dispatch(
        AboutActions.GetApod({
            params: { hd: true },
        })
    );
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(About);

export default Extended;
