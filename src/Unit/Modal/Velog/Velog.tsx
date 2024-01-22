import React from 'react';
import * as S from './Velog.styles';
import Animation1 from '../../Animation/Animation';
import Portal from '../../Portal/Portal';

interface CloseModal {
  onCloseModal: () => void;
}

const Velog: React.FC<CloseModal> = ({ onCloseModal }) => {
  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <Animation1>
              <S.ModalContentDiv>
                <S.TitleBoxDiv>
                  <S.TitleSpan>기술 블로그 작성</S.TitleSpan>
                  <S.SubTitleSpan>2023.07.24 ~ 현재 진행중</S.SubTitleSpan>
                </S.TitleBoxDiv>
                <div>
                  <S.SubTitleSpan>
                    기간 : 2023.07.24 ~ 현재 진행중
                  </S.SubTitleSpan>
                  <S.ContentsText>
                    총 게시글 수 : 138개 ( 평균 주 5회 이상 작성)
                  </S.ContentsText>

                  <button>방문하기</button>
                </div>
              </S.ModalContentDiv>
            </Animation1>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};
export default Velog;
