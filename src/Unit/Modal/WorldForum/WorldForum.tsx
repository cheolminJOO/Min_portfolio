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
                <S.ContentsText>기간 : 2022.03 ~ 2022.09</S.ContentsText>
                <S.ContentsText>
                  내용 : 2022 세계무형문화유산포럼 업무
                </S.ContentsText>
                <S.ContentsText>
                  역할 1. 홈페이지 제작 업무 참여
                      2. 포럼 
                </S.ContentsText>
                <S.ContentsText>
                  성과 : SEO 최적화로 전년 대비 방문자율 40% 상승
                </S.ContentsText>
              </div>
            </S.ModalContentDiv>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default WorldForum;
