import React, { MouseEvent } from 'react';
import * as S from './Portfoilo.styles';
import Portal from '../../Portal/Portal';
import Animation2 from '../../Animation/Animation2';

interface CloseModal {
  onCloseModal: () => void;
}

const Portfolio: React.FC<CloseModal> = ({ onCloseModal }) => {
  const onClickGithub = () => {
    window.open('https://github.com/cheolminJOO/Min_portfolio', '_blank');
  };

  const onClickModalDiv = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            {' '}
            <Animation2>
              <S.ModalContentDiv onClick={onClickModalDiv}>
                <S.TitleBoxDiv>
                  <S.TitleAndSub>
                    <S.TitleSpan>Portfolio</S.TitleSpan>
                  </S.TitleAndSub>
                  <S.TitleAndCancel onClick={onCloseModal}>X</S.TitleAndCancel>
                </S.TitleBoxDiv>
                <div>
                  <S.ContentsText>기간</S.ContentsText>
                  <S.Contents> - 2024.01 ~ 진행중</S.Contents>
                  <S.ContentsText>Tech Stack</S.ContentsText>
                  <S.Contents>
                    - React, Vite, TypeScript, Styled-Components
                  </S.Contents>
                  <S.ContentsText>주요기능</S.ContentsText>
                  <S.Contents>
                    1. Full-page 기능 구현 (Custom)
                    <br />
                    2. 스크롤 이벤트 (IntersectionObserver) <br />
                    3. 반응형
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
                    onClick={onClickGithub}
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

export default Portfolio;
