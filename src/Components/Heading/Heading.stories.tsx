// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container } from "@Styled/Home";
import { Heading } from "./index";

// #endregion Local Imports

export default {
    component: Heading,
    title: "Heading",
};

export const Default = () => (
    <Container>
        <Heading text="Hello World" />
    </Container>
);
