// #region Global Imports
import styled from "styled-components";

// #endregion Global Imports

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
`;

export const HomeButton = styled.div`
    background: #f9da2e;
    border-radius: 5px;
    padding: 5px 10px;
    font-family: Arial;
    font-weight: 700;
    font-size: 25px;
    color: ${({ theme }) => theme.colors.primary};
    letter-spacing: 0;
    cursor: pointer;
`;

export const TopText = styled.div`
    font-size: 80px;
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
    margin-bottom: 10px;
    margin-top: 20px;
`;
