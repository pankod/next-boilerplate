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

export const Top = styled.div`
    margin: 100px;
`;

export const Middle = styled.div`
    text-align: center;
    display: flex;
    flex: 1 1 100%;
    width: 100%;
    justify-content: flex-start;
`;

export const MiddleLeft = styled.div`
    display: flex;
    flex: 1 1 1%;
`;

export const MiddleLeftButtons = styled.div`
    background: #f9da2e;
    border-radius: 8px;
    font-family: Arial;
    font-weight: 700;
    font-size: 25px;
    color: #4b6c8d;
    letter-spacing: 0;
    width: 55px;
    height: 236px;
    margin-left: 15px;
    padding: 10px 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #4b6c8d;

    .button {
        cursor: pointer;
    }

    .active {
        color: #2c3e50;
    }
`;

export const MiddleRight = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
`;

export const Apod = styled.div`
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const ApodButton = styled.div`
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
    font-size: 110px;
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
    margin-bottom: 10px;
`;
