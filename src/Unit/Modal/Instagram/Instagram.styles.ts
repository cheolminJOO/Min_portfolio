import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerDiv = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  transition: opacity 0.3s ease-in-out;
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

export const ModalContentDiv = styled.div`
  width: 500px;
  height: 500px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  border-radius: 300px;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleBoxDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid black;
`;

export const ContentsTitle = styled.td`
  color: black;
`;

export const TextStyleSpan = styled.span`
  color: white;
`;

export const StyleButton = styled.div`
  width: 242px;
  height: 60px;
  background-color: #ece9f5;
  border-radius: 5px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5035a6;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;

export const TitleSpan = styled.span`
  color: #5035a6;
  font-size: 23px;
  font-weight: 700;
`;

export const SubTitleSpan = styled.span`
  color: #646464;
  font-size: 17.063px;
  font-weight: bolder;
`;

export const ContentsText = styled.div`
  color: #646464;
  font-size: 17.063px;
  font-weight: bolder;
  margin-top: 10px; /* 위쪽 여백 추가 */
  white-space: pre-line; /* 줄 바꿈 유지 */
`;

export const Contents = styled.div`
  color: #646464;
  font-size: 17.063px;
  font-weight: 400;
  margin-top: 10px; /* 위쪽 여백 추가 */
  margin-left: 20px;
  white-space: pre-line; /* 줄 바꿈 유지 */
`;

