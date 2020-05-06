import React from "react";
import styled from "styled-components";

import { ILocaleButton } from "./LocaleButton";

import { Button } from "../Basic";

const Container = styled(Button)<{ isActive: boolean }>`
    color: ${({ isActive }) => (isActive ? "#2c3e50" : "inherit")};
`;

export const LocaleButton: React.FunctionComponent<ILocaleButton.IProps> = ({
    lang,
    isActive,
    onClick,
}) => {
    return (
        <Container isActive={isActive} onClick={onClick}>
            {lang}
        </Container>
    );
};
