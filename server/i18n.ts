import NextI18Next from "next-i18next";

const NextI18NextInstance = new NextI18Next({
    defaultLanguage: "en",
    otherLanguages: ["es", "tr"],
});

export default NextI18NextInstance;

export const { appWithTranslation, withTranslation } = NextI18NextInstance;
