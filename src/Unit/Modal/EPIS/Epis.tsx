import React, { MouseEvent } from 'react';
import * as S from './Epis.styles';
import Portal from '../../Portal/Portal';
import Animation3 from '../../Animation/Animation3';

interface CloseModal {
  onCloseModal: () => void;
}

const onClickModalDiv = (event: MouseEvent<HTMLDivElement>) => {
  event.stopPropagation();
};

const Epis: React.FC<CloseModal> = ({ onCloseModal }) => {
  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <Animation3>
              <S.ModalContentDiv onClick={onClickModalDiv}>
                <S.TitleBoxDiv>
                  <S.TitleAndSub>
                    <S.TitleSpan>EPIS</S.TitleSpan>
                  </S.TitleAndSub>
                  <S.TitleAndCancel onClick={onCloseModal}>X</S.TitleAndCancel>
                </S.TitleBoxDiv>
                <div>
                  <S.ContentsText>기간</S.ContentsText>
                  <S.Contents> - 2021.11.08 ~ 2021.12.03</S.Contents>
                  <S.ContentsText>내용</S.ContentsText>
                  <S.Contents>
                    {' '}
                    1. 사회적 농업 경험 및 컨텐츠 기획
                    <br /> 2. 컨텐츠 제작 및 홍보 <br /> 3. 주 4일 숙식
                  </S.Contents>
                </div>
                <div>
                  <button>ㅇㅇ</button>
                </div>
              </S.ModalContentDiv>
            </Animation3>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default Epis;
