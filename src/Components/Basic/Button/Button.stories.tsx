// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Button } from "./index";
// #endregion Local Imports

export default {
    component: Button,
    title: "Button",
};

export const Default = () => <Button>Hello Button</Button>

export const Disabled = () => <Button disabled>Hello Button</Button>