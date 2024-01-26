import React, { MouseEvent } from 'react';
import * as S from './Instagram.styles';
import Portal from '../../Portal/Portal';
import Animation2 from '../../Animation/Animation2';

interface CloseModal {
  onCloseModal: () => void;
}

const Instagram: React.FC<CloseModal> = ({ onCloseModal }) => {
  const onCLickGithub = () => {
    window.open('https://github.com/insta-clone-hh99/front', '_blank');
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
                    <S.TitleSpan>Instagram</S.TitleSpan>
                  </S.TitleAndSub>
                  <S.TitleAndCancel onClick={onCloseModal}>X</S.TitleAndCancel>
                </S.TitleBoxDiv>
                <div>
                  <S.ContentsText>기간</S.ContentsText>
                  <S.Contents> - 23.11.24 ~ 23.11.30</S.Contents>
                  <S.ContentsText>Tech Stack</S.ContentsText>
                  <S.Contents>
                    {' '}
                    - React, Javascript, CRA, Styled-Components
                  </S.Contents>
                  <S.ContentsText>주요 기능</S.ContentsText>
                  <S.Contents>
                    1. 게시글,댓글 이모티콘 적용 (emoji-picker-react)
                    <br />
                    2. 모달 기능 구현 (react-portal)
                    <br />
                    3. 이미지 미리보기 (FileReader)
                  </S.Contents>
                </div>
                <div>
                  <S.GithubImg
                    onClick={onCLickGithub}
                    src='/git.png'
                    alt='깃허브'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                  />
                  <S.YoutubeImg
                    onClick={onCLickGithub}
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

export default Instagram;
