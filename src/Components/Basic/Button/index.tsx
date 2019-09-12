import React from "react";
import styled from "styled-components";

import { IButton } from "./Button";

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
