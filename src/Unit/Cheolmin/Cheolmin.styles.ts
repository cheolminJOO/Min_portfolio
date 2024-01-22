import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  justify-content: center;
  border: 2px solid white;
`;

export const FirstLineTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HightLightText = styled.div`
  font-size: 50px;
  font-weight: bolder;
  color: red;
`;

export const FirstText = styled.span`
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
  width: 100vw;
  height: 70%;
  border: 1px solid black;
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
  background-color: white;
  border-radius: 40px;
`;

export const TitleAndNumberBox = styled.div`
  margin-left: 2rem;
  display: flex;
  justify-content: space-between;
`;

export const TitleAndNumber = styled.div``;

export const GithubImg = styled(motion.img)`
  width: 60px;
  height: 50px;
  cursor: url('https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/finger+(2).png'),
    auto;
`;

export const YoutubeImg = styled(motion.img)`
  width: 50px;
  height: 50px;
  cursor: url('https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/finger+(2).png'),
    auto;
`;

export const ProjectImg = styled(motion.img)`
  cursor: url('https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/finger+(2).png'),
    auto;
`;
