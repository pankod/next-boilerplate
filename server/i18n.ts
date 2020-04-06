// #region Global Imports
import NextI18Next from "next-i18next";
// #endregion Global Imports

const NextI18NextInstance = new NextI18Next({
    defaultLanguage: "en",
    otherLanguages: ["es", "tr"],
});

export const { appWithTranslation, withTranslation } = NextI18NextInstance;

export default NextI18NextInstance;
