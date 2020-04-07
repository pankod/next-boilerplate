// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Heading } from "./index";
import { Container } from "@Styled/Home"

// #endregion Local Imports

export default {
    component: Heading,
    title: "Heading",
};

export const Default = () => (
    <Container>
        <Heading text="Hello World" />
    </Container>
)