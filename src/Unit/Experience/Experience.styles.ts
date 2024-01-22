import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const floatingAnimation = keyframes`
  0% {
    transform: translate(0%,0%);
  }
  50% {
    transform: translate(0%, 3%);
  }
  100% {
    transform: translate(0%,0%);
  }
`;

const frameInAnimation = keyframes`
  0% {

    transform: translateY(-20%);
  }

  50% {
    transform: translateY(0%);

  }

  100%{

    transform: translateY(-20%);
  }
`;

export const Container = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextBox = styled.div`
  width: 100vw;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid white;
`;

export const FirstLineTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export const HightLightText = styled.div`
  font-size: 50px;
  font-weight: bolder;
  color: red;
`;

export const TextStyle = styled.span`
  font-size: 50px;
  font-weight: bolder;
  color: white;
`;

export const FirstText = styled.span`
  font-size: 50px;
  font-weight: bolder;
  color: skyblue;
  margin: 0px 1.5rem;
  animation: ${frameInAnimation} 3s ease-in-out infinite;
`;

export const SecondText = styled.div`
  font-size: 50px;
  font-weight: bolder;
  color: white;
`;

export const ProjectBox = styled.div`
  width: 100vw;
  height: 70%;
  display: flex;
  flex-wrap: wrap;
`;

export const NineCloudGif = styled.img`
  height: 400px;
`;

export const Numbering = styled.div`
  font-size: 20px;
  color: black;
  font-weight: bolder;
`;

export const TitleSpan = styled.div`
  font-size: 20px;
  color: black;
  font-weight: bolder;
`;

export const SubTitleSpan = styled.div`
  font-size: 17px;
  color: black;
  font-weight: bolder;
`;

export const ProjectBoxDiv = styled(motion.div)`
  margin: 3rem;
  width: 360px;
  border: 1px solid white;
  background-color: white;
  border-radius: 40px;
`;

export const TitleAndNumberBox = styled.div`
  margin-left: 2rem;
  display: flex;
  justify-content: space-between;
`;

export const TitleAndNumber = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const YoutubeImg = styled(motion.img)`
  width: 70px;
  height: 50px;
  cursor: url('https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/finger+(2).png'),
    auto;
`;

export const ProjectImg = styled(motion.img)`
  cursor: url('https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/finger+(2).png'),
    auto;

  &:hover {
    animation: ${floatingAnimation} 1.3s ease-in-out infinite; /* 떠다니는 애니메이션 추가 */
  }
`;
