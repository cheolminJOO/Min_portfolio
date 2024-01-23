import React from 'react';
import * as S from './WorldForum.styles';
import Portal from '../../Portal/Portal';
import Animation3 from '../../Animation/Animation3';

interface CloseModal {
  onCloseModal: () => void;
}

const WorldForum: React.FC<CloseModal> = ({ onCloseModal }) => {
  const onClickChrome = () => {
    window.open(
      'https://ichworldforum.org/2022-world-forum-for-intangible-cultural-heritage-2',
      '_blank'
    );
  };

  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <Animation3>
              <S.ModalContentDiv>
                <S.TitleBoxDiv>
                  <S.TitleSpan>ICH WORLD FORUM</S.TitleSpan>
                  <S.SubTitleSpan>포럼 홈페이지 제작 업무 참여</S.SubTitleSpan>
                </S.TitleBoxDiv>
                <div>
                  <S.ContentsText>기간</S.ContentsText>
                  <S.Contents> - 2022.03 ~ 2022.09</S.Contents>
                  <S.ContentsText>내용</S.ContentsText>
                  <S.Contents> - 2022 세계무형문화유산포럼 업무</S.Contents>
                  <S.ContentsText>역할</S.ContentsText>
                  <S.Contents>
                    1. 홈페이지 제작 업무 참여 <br /> 2. 포털사이트 등록
                  </S.Contents>
                  <S.ContentsText>성과</S.ContentsText>
                  <S.Contents>
                    SEO 최적화로 전년 대비 방문자율 40% 상승
                  </S.Contents>
                </div>
                <S.ForumBtn onClick={onClickChrome}>
                  포럼 홈페이지 이동
                </S.ForumBtn>
              </S.ModalContentDiv>
            </Animation3>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default WorldForum;
