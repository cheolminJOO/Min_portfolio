import * as S from './YouthForum.styles';
import Portal from '../../Portal/Portal';
import Animation3 from '../../Animation/Animation3';
import { MouseEvent } from 'react';

interface CloseModal {
  onCloseModal: () => void;
}

const YouthForum: React.FC<CloseModal> = ({ onCloseModal }) => {
  const onClickSecondChrome = () => {
    window.open('https://zep.us/play/2mYqBe', '_blank');
  };

  const onClickModalDiv = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <Animation3>
              <S.ModalContentDiv onClick={onClickModalDiv}>
                <S.TitleBoxDiv>
                  <S.TitleAndSub>
                    <S.TitleSpan>ICH YOUTH FORUM</S.TitleSpan>
                  </S.TitleAndSub>
                  <S.TitleAndCancel onClick={onCloseModal}>X</S.TitleAndCancel>
                </S.TitleBoxDiv>
                <div>
                  <S.ContentsText>기간</S.ContentsText>
                  <S.Contents> - 2022.03 ~ 2022.09</S.Contents>
                  <S.ContentsText>내용</S.ContentsText>
                  <S.Contents> - 2022 YOUTH Forum 업무</S.Contents>
                  <S.ContentsText>역할</S.ContentsText>
                  <S.Contents>
                    {' '}
                    - ZEP 맵 기획과 운영 및 프로그램 진행
                  </S.Contents>
                  <S.ContentsText>성과</S.ContentsText>
                  <S.Contents> - 유네스코 1면 등재</S.Contents>
                </div>
                <S.ForumBtn onClick={onClickSecondChrome}> ZEP 이동</S.ForumBtn>
              </S.ModalContentDiv>
            </Animation3>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default YouthForum;
