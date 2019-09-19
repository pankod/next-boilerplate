// #region Global Imports
import React from "react";
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { IButton } from "./Button";
// #endregion Local Imports

const Container = styled.div<IButton.IProps>`
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const Button: React.FunctionComponent<IButton.IProps> = props => {
    return <Container {...props} />;
};
