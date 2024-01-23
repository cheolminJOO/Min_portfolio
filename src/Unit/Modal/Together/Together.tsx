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
                  <S.ContentsText>기간</S.ContentsText>
                  <S.Contents>2023.10 ~ 2024.01</S.Contents>
                  <S.ContentsText>내용</S.ContentsText>
                  <S.Contents>
                    1. 미니 프로젝트 | 6명 | 리더,발표
                    <br /> 2. 주특기 프로젝트 | 4명
                    <br /> 3. 클론 코딩 프로젝트 | 4명
                    <br /> 4. 파이널 프로젝트 | 6명 | 리더,발표
                  </S.Contents>
                  <S.ContentsText>기타</S.ContentsText>
                  <S.Contents>
                    - 파이널 프로젝트에서 "최고의 인기 프로젝트상" 수상

                  </S.Contents>
                  <S.ContentsText>
                    {/* 기타 : 최고의 프로젝트 투표의 전체 투표율 중 40%를 득표해
                    "최고의 인기 프로젝트상" 수상 */}
                  </S.ContentsText>
                </div>
                <div>
                  <button>가즈아</button>
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
