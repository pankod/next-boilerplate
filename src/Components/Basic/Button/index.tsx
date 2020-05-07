// #region Global Imports
import React from "react";
import styled from "styled-components";
// #endregion Global Imports

const Container = styled.div<IButton.IProps>`
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    color: ${({ theme }) => theme.colors.primary};
`;

export const Button: React.FC<IButton.IProps> = props => (
    <Container {...props} />
);
