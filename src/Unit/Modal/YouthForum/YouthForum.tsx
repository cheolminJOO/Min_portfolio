import * as S from './YouthForum.styles';
import Portal from '../../Portal/Portal';

interface CloseModal {
  onCloseModal: () => void;
}

const YouthForum: React.FC<CloseModal> = ({ onCloseModal }) => {
  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <S.ModalContentDiv>
              <S.TitleBoxDiv>
                <S.TitleSpan>ICH YOUTH FORUM</S.TitleSpan>
                <S.SubTitleSpan>입력하신 내용이 모두 사라져요!</S.SubTitleSpan>
              </S.TitleBoxDiv>
              <div>
                <S.ContentsText>기간 : 2022.03 ~ 2022.09</S.ContentsText>
                <S.ContentsText>
                  내용 : ZEP에서 진행된 2022 YOUTH Forum의 맵 기획 및 운영
                </S.ContentsText>
                <S.ContentsText>성과 : 유네스코 1면 등재</S.ContentsText>
              </div>
            </S.ModalContentDiv>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default YouthForum;
