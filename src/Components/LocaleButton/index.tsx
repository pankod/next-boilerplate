import React from "react";
import styled from "styled-components";

import { ILocaleButton } from "./LocaleButton";

import { Button } from "../Basic";

const Container = styled(Button)`
    .active {
        color: #2c3e50;
    }
`;

export const LocaleButton: React.FunctionComponent<ILocaleButton.IProps> = ({
    lang,
    isActive,
    onClick,
}) => {
    return (
        <Container className={isActive ? "active" : ""} onClick={onClick}>
            {lang}
        </Container>
    );
};
