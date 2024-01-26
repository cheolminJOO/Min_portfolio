import { MouseEvent } from 'react';
import Animation2 from '../../Animation/Animation2';
import Portal from '../../Portal/Portal';
import * as S from './NineCloudModal.styles';
import { IOnClose } from './NineCloudModal.types';

const NineCloudModal: React.FC<IOnClose> = ({ onCloseModal }) => {
  const onClickGithub = () => {
    window.open('https://github.com/final-project-hh99/front', '_blank');
  };

  const onClickYoutube = () => {
    window.open('https://www.youtube.com/watch?v=Ha4b-zM9gzc', '_blank');
  };

  const onClickModalDiv = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <Animation2>
              <S.ModalContentDiv onClick={onClickModalDiv}>
                <S.TitleBoxDiv>
                  <S.TitleAndSub>
                    <S.TitleSpan>Nine Cloud</S.TitleSpan>
                  </S.TitleAndSub>
                  <S.TitleAndCancel onClick={onCloseModal}>X</S.TitleAndCancel>
                </S.TitleBoxDiv>
                <div>
                  <S.ContentsText>기간</S.ContentsText>
                  <S.Contents> - 2023.12 ~ 2024.01</S.Contents>
                  <S.ContentsText>Tech Stack</S.ContentsText>
                  <S.Contents>
                    {' '}
                    - React, TypeScript, Styeld-Components, Recoil
                  </S.Contents>
                  <S.ContentsText>주요기능</S.ContentsText>
                  <S.Contents>
                    1. 달력 기능 및 디자인 (data-fns, table)
                    <br />
                    2. 일기등록 및 수정 (react-quill)
                    <br />
                    3. 모달창 구현 (react-portal)
                    <br />
                    4. 전반적인 애니메이션 기능 (framer-motion)
                  </S.Contents>
                </div>
                <div>
                  <S.GithubImg
                    onClick={onClickGithub}
                    src='/git.png'
                    alt='깃허브'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                  />
                  <S.YoutubeImg
                    onClick={onClickYoutube}
                    src='/youtubeLogo.png'
                    alt='유튜브 로고'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                  />
                </div>
              </S.ModalContentDiv>
            </Animation2>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default NineCloudModal;
