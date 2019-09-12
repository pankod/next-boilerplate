import React from "react";
import styled from "styled-components";

import { IButton } from "./Button";

const StyledDiv = styled.div`
    cursor: pointer;

    .active {
        color: #2c3e50;
    }
`;

export const Button: React.FunctionComponent<IButton.IProps> = ({
    children,
    onClick,
    className,
}) => {
    return (
        <StyledDiv className={className} onClick={onClick}>
            {children}
        </StyledDiv>
    );
};
