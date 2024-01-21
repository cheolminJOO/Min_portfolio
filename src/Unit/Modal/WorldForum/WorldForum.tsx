import React from 'react';
import * as S from './WorldForum.styles';
import Portal from '../../Portal/Portal';

interface CloseModal {
  onCloseModal: () => void;
}

const WorldForum: React.FC<CloseModal> = ({ onCloseModal }) => {
  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <S.ModalContentDiv>
              <S.TitleBoxDiv>
                <S.TitleSpan>ICH WORLD FORUM</S.TitleSpan>
                <S.SubTitleSpan>2022.03 ~ 2022.09</S.SubTitleSpan>
              </S.TitleBoxDiv>
              <div>
                <S.SubTitleSpan>기간 : 2022.03 ~ 2022.09</S.SubTitleSpan>
              </div>
            </S.ModalContentDiv>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default WorldForum;
