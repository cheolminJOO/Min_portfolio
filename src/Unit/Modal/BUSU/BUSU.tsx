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
                  <S.ContentsText>기간</S.ContentsText>
                  <S.Contents> - 2023.08 ~ 진행중</S.Contents>
                  <S.ContentsText>Tech Stack</S.ContentsText>
                  <S.Contents>
                    {' '}
                    - Next.js, TypeScript, Styled.Components, Recoil
                  </S.Contents>
                  <S.ContentsText>주요기능</S.ContentsText>
                  <S.Contents>
                    1. 무한스크롤 (react-infinite-scroller)
                    <br />
                    2. 카카오 지도 검색 (kakao map api)
                    <br />
                    3. 게시판 검색 (refetch, search)
                    <br />
                    4. 주소 찾기 기능 (kakao 주소 api)
                    <br />
                    5. 알림창 (sweetAlert2)
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

export default BUSU;
