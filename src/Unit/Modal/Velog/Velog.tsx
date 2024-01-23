import React from 'react';
import * as S from './Velog.styles';
import Animation1 from '../../Animation/Animation';
import Portal from '../../Portal/Portal';

interface CloseModal {
  onCloseModal: () => void;
}

const Velog: React.FC<CloseModal> = ({ onCloseModal }) => {
  const onClickVelog = () => {
    window.open('https://velog.io/@uiop3996/posts', '_blank');
  };

  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <Animation1>
              <S.ModalContentDiv>
                <S.TitleBoxDiv>
                  <S.TitleSpan>기술 블로그 작성</S.TitleSpan>
                  <S.ContentsText>평균 주 5회 TIL 작성</S.ContentsText>
                </S.TitleBoxDiv>
                <div>
                  <S.ContentsTexts>기간</S.ContentsTexts>
                  <S.Contents> - 2023.07.24 ~ ing</S.Contents>
                  <S.ContentsTexts>총 게시글 수</S.ContentsTexts>
                  <S.Contents> - 138개 ( 평균 주 5회 이상 작성)</S.Contents>
                  <S.ContentsTexts>기타</S.ContentsTexts>
                  <S.Contents> - 2024년 1월 23일 기준</S.Contents>
                </div>
                <S.ForumBtn onClick={onClickVelog}> VELOG </S.ForumBtn>
              </S.ModalContentDiv>
            </Animation1>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};
export default Velog;
