import React from 'react';
import * as S from './Epis.styles';
import Portal from '../../Portal/Portal';

interface CloseModal {
  onCloseModal: () => void;
}

const Epis: React.FC<CloseModal> = ({ onCloseModal }) => {
  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <S.ModalContentDiv>
              <S.TitleBoxDiv>
                <S.TitleSpan>EPIS</S.TitleSpan>
                <S.SubTitleSpan>입력하신 내용이 모두 사라져요!</S.SubTitleSpan>
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
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default Epis;
