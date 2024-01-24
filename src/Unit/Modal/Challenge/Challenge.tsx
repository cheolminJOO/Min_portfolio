import React from 'react';
import Portal from '../../Portal/Portal';
import Animation1 from '../../Animation/Animation';
import * as S from './Challenge.styles';

interface CloseModal {
  onCloseModal: () => void;
}

const Challenge: React.FC<CloseModal> = ({ onCloseModal }) => {
  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <Animation1>
              <S.ModalContentDiv>
                <S.TitleBoxDiv>
                  <S.TitleSpan>성장</S.TitleSpan>
                  <S.SubTitleSpan>
                    익숙한 것과 새로운 것의 조화를 추구
                  </S.SubTitleSpan>
                </S.TitleBoxDiv>
                <div>
                  <S.ContentsText> 경험 한 기술</S.ContentsText>
                  <S.Contents>
                    {' '}
                    • 프레임워크 : Next.js, React <br /> • CSS :
                    Styled-Components <br /> • 개발도구 : CRA, Vite <br /> •
                    상태관리 : Redux, Recoil <br /> • 클라이언트 : React-Query,
                    Axios <br /> • CI/CD : Github Actions, Vercel <br /> • 언어
                    : TypeScript
                  </S.Contents>
                  <S.ContentsText> 팀 프로젝트</S.ContentsText>
                  <S.TeamProjectDiv>
                    <S.HyperLinkText
                      target='_blank'
                      href='https://github.com/cheolminJOO/web-miniproject_6_'
                    >
                      1. 웹미니프로젝트
                    </S.HyperLinkText>
                    <S.HyperLinkText
                      target='_blank'
                      href='https://github.com/dh7hong/front-have-fun'
                    >
                      2. 주특기 프로젝트
                    </S.HyperLinkText>
                    <S.HyperLinkText
                      target='_blank'
                      href='https://github.com/insta-clone-hh99/front'
                    >
                      3. 클론코딩 프로젝트
                    </S.HyperLinkText>
                    <S.HyperLinkText
                      target='_blank'
                      href='https://github.com/final-project-hh99/front'
                    >
                      4. 파이널 프로젝트
                    </S.HyperLinkText>
                  </S.TeamProjectDiv>
                  <S.ContentsText> 개인 프로젝트</S.ContentsText>
                  <S.TeamProjectDiv>
                    <S.HyperLinkText
                      target='_blank'
                      href='https://github.com/cheolminJOO/Buying-and-Selling-Used-Stuff'
                    >
                      1. BUSU
                    </S.HyperLinkText>
                    <S.HyperLinkText
                      target='_blank'
                      href='https://github.com/cheolminJOO/Min_portfolio'
                    >
                      2. Portfolio
                    </S.HyperLinkText>
                  </S.TeamProjectDiv>
                </div>
              </S.ModalContentDiv>
            </Animation1>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default Challenge;
