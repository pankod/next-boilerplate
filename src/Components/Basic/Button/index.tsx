// #region Global Imports
import React from "react";
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { IButton } from "./Button";
// #endregion Local Imports

const Container = styled.div`
    cursor: pointer;
`;

export const Button: React.FunctionComponent<IButton.IProps> = ({
    children,
    onClick,
    className,
}) => {
    return (
        <Container className={className} onClick={onClick}>
            {children}
        </Container>
    );
};
