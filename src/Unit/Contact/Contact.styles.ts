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

export const Container = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid white;
  border-left: none;
`;

export const FirstLineTextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 100px;
`;

export const ContentsBox = styled.div`
  display: flex;
  width: 1000px;
  height: 50%;
  font-weight: bolder;
  color: white;
  flex-direction: column;
  justify-content: space-between;
`;

export const HightLightText = styled.div`
  font-size: 50px;
  font-weight: bolder;
  color: red;
`;

export const FirstText = styled.a`
  font-size: 50px;
  font-weight: bolder;
  color: white;
`;

export const Title = styled.span`
  font-size: 50px;
  font-weight: bolder;
  color: white;
`;

export const SecondText = styled.div`
  font-size: 50px;
  font-weight: bolder;
  color: black;
`;

export const ProjectBox = styled.div`
  width: 70%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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
  background-color: white;
  border-radius: 40px;
`;

export const TitleAndNumberBox = styled.div`
  margin-left: 2rem;
  display: flex;
  justify-content: space-between;
`;

export const TitleAndNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export const GithubImg = styled(motion.img)`
  width: 50px;
  height: 50px;
  cursor: url('https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/finger+(2).png'),
    auto;
`;

export const YoutubeImg = styled(motion.img)`
  width: 50px;
  height: 50px;
  margin-right: 15px;
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