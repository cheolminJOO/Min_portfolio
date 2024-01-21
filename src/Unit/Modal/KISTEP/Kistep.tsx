import React from 'react';
import Portal from '../../Portal/Portal';
import * as S from './Kistep.styles';

interface CloseModal {
  onCloseModal: () => void;
}

const Kistep: React.FC<CloseModal> = ({ onCloseModal }) => {
  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <S.ModalContentDiv>
              <S.TitleBoxDiv>
                <S.TitleSpan>ICH WORLD FORUM</S.TitleSpan>
                <S.SubTitleSpan>입력하신 내용이 모두 사라져요!</S.SubTitleSpan>
              </S.TitleBoxDiv>
            </S.ModalContentDiv>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default Kistep;
