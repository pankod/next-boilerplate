// #region Global Imports
import React from "react";
import { action } from '@storybook/addon-actions';
import { boolean, select } from "@storybook/addon-knobs";
// #endregion Global Imports

// #region Local Imports
import { LocaleButton } from "./index";
import { Apod, ApodButton } from "@Styled/Home"
// #endregion Local Imports

export default {
    component: LocaleButton,
    title: "LocaleButton",
};

export const Default = () => (
    <Apod>
        <ApodButton>
            <LocaleButton
                lang={select("Language", ["tr", "en", "es"], "tr")}
                isActive={boolean("Active", true)}
                onClick={action("button-click")} />
        </ApodButton>
    </Apod>
)