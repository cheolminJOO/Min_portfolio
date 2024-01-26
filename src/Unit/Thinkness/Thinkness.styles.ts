import styled, { keyframes } from 'styled-components';

const frameInAnimation = keyframes`
  0% {
    transform: translateX(-270px);
  }
  50% {
    transform: translateX(900px);
  }
  100% {
    transform: translateX(-270px);
  }
`;

const rollingAnimation = keyframes`
  0% {
    transform: translateX(-270px) ;
    transform :rotate(0deg);
    transform: scale(1.1);

  }
  10% {
    transform: translateX(-270px) ;
    transform :rotate(30deg);

  }
  25% {
    transform: translateX(-270px) ;
    transform :rotate(60deg);
    transform: scale(1.1);

  }
  50% {
    transform: translateX(900px);
    transform :rotate(90deg);

  }

  60% {
    transform: translateX(900px);
    transform :rotate(120deg);
    transform: scale(1.1);

  }
  75% {
    transform: translateX(900px);
    transform :rotate(150deg);

  }
  100% {
    transform: translateX(1200px);
    transform :rotate(180deg);
    transform: scale(1.1);

  }

  
`;

const floatingAnimation = keyframes`
  0% {

    transform: translateY(0%);
  }

  50% {
    transform: translateY(-10%);

  }

  100%{

    transform: translateY(0%);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

export const HeaderDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LightHouseDiv = styled.div`
  width: 400px;
  height: 315px;
  border: 5px solid white;
  border-radius: 0px 150px 150px 0px;
  display: flex;
  /* animation: ${frameInAnimation} 10s ease-in-out infinite; */
  z-index: 10;
`;

export const ClickBoxDiv = styled.div`
  width: 200px;
  height: 280px;
  margin-top: 30px;
  border: 5px solid white;
  border-radius: 0px 150px 150px 0px;
  display: flex;
  /* animation: ${frameInAnimation} 10s ease-in-out infinite; */
  z-index: 10;
`;

export const ClickText = styled.div`
  font-size: 20px;
  color: blue;
`;

export const ConnectBarDiv = styled.div`
  width: 50px;
  height: 20px;
  border: 2px solid white;
  border-left: none;
  border-right: none;
`;

export const CheolMinImgDiv = styled.div`
  height: 300px;
  width: 350px;
  border: 5px solid white;
  margin-top: 40px;
  border-radius: -50px;
`;

export const CheolMinImg = styled.img`
  width: 300px;
  height: 300px;
`;

export const BoxContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConnectionDiv = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const BoxDiv = styled.div`
  width: 500px;
  height: 400px;
  border: 5px solid white;
`;

export const TestBox = styled.div`
  width: 100%;
  display: flex;
`;

export const TrainContainer = styled.div`
  &:hover {
    animation: ${floatingAnimation} 5s ease-in-out infinite;
  }
`;

export const WheelCircle = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid white;
  border-radius: 50px;
  animation: ${rollingAnimation} 3s;
`;

export const wheelCircleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TrainHeaderDiv = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
`;

export const TrainHeaderWheel = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid white;
  border-radius: 50px;
  animation: ${rollingAnimation} 3s;
  margin-right: 60px;
`;

export const SquareDiv = styled.div`
  width: 100px;
  height: 50px;
  border: 2px solid white;
`;

export const SquareMiniDiv = styled.div`
  width: 50px;
  height: 25px;
  border: 2px solid white;
`;
