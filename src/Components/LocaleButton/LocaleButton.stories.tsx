// #region Global Imports
import React from "react";
import { action } from '@storybook/addon-actions';
import { boolean, select } from "@storybook/addon-knobs";
// #endregion Global Imports

// #region Local Imports
import { LocaleButton } from "./index";
// #endregion Local Imports

export default {
    component: LocaleButton,
    title: "LocaleButton",
};

export const Default = () => (
    <LocaleButton
        lang={select("Language", ["tr", "en", "es"], "tr")}
        isActive={boolean("Active", true)}
        onClick={action("button-click")} />
)