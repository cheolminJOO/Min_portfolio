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
                  <S.TitleSpan>도전</S.TitleSpan>
                  <S.SubTitleSpan>익숙한 것과 새로운 것</S.SubTitleSpan>
                </S.TitleBoxDiv>
                <div>
                  <S.ContentsText>1. 전역 (2016.04 ~ 2018.04)</S.ContentsText>
                  <S.Contents> 2. React, Next.js</S.Contents>
                  <S.ContentsText>2. 개발 도구</S.ContentsText>
                  <S.Contents>- CRA, Vite</S.Contents>
                  <S.ContentsText>
                    성과 : SEO 최적화로 전년 대비 방문자율 40% 상승
                  </S.ContentsText>
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
