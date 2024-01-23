import React from 'react';
import * as S from './BUSU.styles';
import Portal from '../../Portal/Portal';
import Animation1 from '../../Animation/Animation';
import Animation2 from '../../Animation/Animation2';

interface CloseModal {
  onCloseModal: () => void;
}

const BUSU: React.FC<CloseModal> = ({ onCloseModal }) => {
  const onClickGithub = () => {
    window.open(
      'https://github.com/cheolminJOO/Buying-and-Selling-Used-Stuff',
      '_blank'
    );
  };
  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <Animation2>
              <S.ModalContentDiv>
                <S.TitleBoxDiv>
                  <S.TitleSpan>BUSU</S.TitleSpan>
                  <S.SubTitleSpan>중고매매 커뮤니티 서비스</S.SubTitleSpan>
                </S.TitleBoxDiv>
                <div>
                  <S.ContentsText>기간 : 2023.08 ~ 진행중</S.ContentsText>
                  <S.ContentsText>
                    Tech Stack : Next.js, Styled.Components, Recoil
                  </S.ContentsText>
                  <S.ContentsText>
                    역할 1. 홈페이지 제작 업무 참여 2. 포럼
                  </S.ContentsText>
                  <S.ContentsText>
                    성과 : SEO 최적화로 전년 대비 방문자율 40% 상승
                  </S.ContentsText>
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

export default BUSU;
