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
`;

export const FirstLineTextBox = styled.div`
  display: flex;
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
  color: white;
`;

export const ProjectBox = styled.div`
  width: 100vw;
  height: 70%;
  border: 1px solid white;
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
  cursor: pointer;
  border: 1px solid white;
  background-color: white;
  border-radius: 40px;
`;

export const TitleAndNumberBox = styled.div`
  margin-left: 2rem;
  display: flex;
  justify-content: space-between;
`;

export const TitleAndNumber = styled.div``;

export const YoutubeImg = styled(motion.img)`
  width: 70px;
  height: 50px;
`;

export const ProjectImg = styled(motion.img)``;