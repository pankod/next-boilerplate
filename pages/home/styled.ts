import styled from 'styled-components';

export const Container = styled.div`
background-color: #2c3e50;
display: flex;
flex-direction: column;
flex: 1 1 100%;
justify-content: flex-start;
align-items: center;
min-height: 100vh;
`;

export const ContainerTop = styled.div`
margin: 100px;
`;

export const ContainerMiddle = styled.div`
text-align: center;
display: flex;
flex: 1 1 100%;
width: 100%;
justify-content: flex-start;
`;

export const ContainerMiddleLeft = styled.div`
display: flex;
flex: 1 1 1%;
`;

export const ContainerMiddleLeftButtons = styled.div`
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

export const ContainerMiddleRight = styled.div`
display: flex;
flex-direction: column;
flex: 1 1 100%;
`;

export const ContainerMiddleRightApod = styled.div`
display: flex;
flex: 1 1 100%;
flex-direction: column;
justify-content: space-around;
align-items: center;
`;

export const ContainerMiddleRightApodButton = styled.div`
background: #f9da2e;
border-radius: 5px;
padding: 5px 10px;
font-family: Arial;
font-weight: 700;
font-size: 25px;
color: #2c3e50;
letter-spacing: 0;
`;

export const ContainerTopText = styled.div`
font-size: 110px;
font-family: Arial, Helvetica, sans-serif;
color: #ffffff;
margin-bottom: 10px;
`;