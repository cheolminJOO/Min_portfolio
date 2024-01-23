import * as S from './YouthForum.styles';
import Portal from '../../Portal/Portal';
import Animation3 from '../../Animation/Animation3';

interface CloseModal {
  onCloseModal: () => void;
}

const YouthForum: React.FC<CloseModal> = ({ onCloseModal }) => {
  const onClickSecondChrome = () => {
    window.open('https://zep.us/play/2mYqBe', '_blank');
  };

  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <Animation3>
              <S.ModalContentDiv>
                <S.TitleBoxDiv>
                  <S.TitleSpan>ICH YOUTH FORUM</S.TitleSpan>
                  <S.SubTitleSpan>
                    입력하신 내용이 모두 사라져요!
                  </S.SubTitleSpan>
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
                <button onClick={onClickSecondChrome}>이동</button>
              </S.ModalContentDiv>
            </Animation3>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default YouthForum;
