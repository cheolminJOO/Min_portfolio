import React from 'react';
import Portal from '../../Portal/Portal';
import Animation1 from '../../Animation/Animation';
import * as S from './Together.styls';

interface CloseModal {
  onCloseModal: () => void;
}

const Together: React.FC<CloseModal> = ({ onCloseModal }) => {
  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <Animation1>
              <S.ModalContentDiv>
                <S.TitleBoxDiv>
                  <S.TitleSpan>함께, 다 같이</S.TitleSpan>
                  <S.SubTitleSpan>2022.03 ~ 2022.09</S.SubTitleSpan>
                </S.TitleBoxDiv>
                <div>
                  <S.ContentsText>기간 : 2023.10 ~ 2024.01</S.ContentsText>
                  <S.ContentsText>
                    내용 : 총 4번의 협업 프로젝트 1. 미니 프로젝트 인원 6명 2.
                    주특기 프로젝트 인원 4명 3. 클론 코딩 프로젝트 인원 4명 4.
                    파이널 프로젝트 인원 6명
                  </S.ContentsText>
                  <S.ContentsText>
                    역할 : 4번의 프로젝트에서 2번의 리더 역할을 수행하고 3번의 발표를 경험
                    
                  </S.ContentsText>
                  <S.ContentsText>
                    기타 : 최고의 프로젝트 투표의 전체 투표율 중 40%를 득표해
                    "최고의 인기 프로젝트상" 수상
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

export default Together;
