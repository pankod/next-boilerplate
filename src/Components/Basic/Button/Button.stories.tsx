// #region Global Imports
import React from "react";
import { boolean } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

// #endregion Global Imports

// #region Local Imports
import { Button } from "./index";
import { Apod, ApodButton } from "@Styled/Home"
// #endregion Local Imports

export default {
    component: Button,
    title: "Button",
};

export const Default = () => (
    <Apod>
        <ApodButton>
            <Button
                disabled={boolean("Disabled", false)}
                onClick={action("button-click")}
            >
                Hello Button
            </Button>
        </ApodButton>
    </Apod>
)