import React from 'react';
import Portal from '../../Portal/Portal';
import Animation1 from '../../Animation/Animation';
import * as S from './UserTest.styles';

interface CloseModal {
  onCloseModal: () => void;
}

const UserTest: React.FC<CloseModal> = ({ onCloseModal }) => {
  const onClickFormBtn = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSe-xHrYbAT4EnWvG1j7TqTww0pFkShrhXEQm-bcwGbCOogY8w/viewform',
      '_blank'
    );
  };

  const onClickSurveyBtn = () => {
    window.open(
      'https://docs.google.com/spreadsheets/d/1WIKu4Sb3ajbFrCnKazmgvapi1DXgYqv7DIb8N4UKKjU/edit#gid=1547708136',
      '_blank'
    );
  };

  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <Animation1>
              <S.ModalContentDiv>
                <S.TitleBoxDiv>
                  <S.TitleSpan>User Testing</S.TitleSpan>
                </S.TitleBoxDiv>
                <div>
                  <S.ContentsText>
                    기간 : 2023.12.28 ~ 2024.01.02 (5일 간 진행)
                  </S.ContentsText>
                  <S.ContentsText>응답 수 : 68개</S.ContentsText>
                  <S.ContentsText>
                    내용 : 1. 전체회의를 통해, 피드백 1차 정리 2. 각 스택끼리
                    회의 진행, 피드백 2차 정리 3. 색깔로 분류해 자신의 역할 정리
                    4. 처리한 피드백은 표시
                  </S.ContentsText>

                  <button onClick={onClickFormBtn}>구글폼</button>
                  <button onClick={onClickSurveyBtn}>유저피드백</button>
                </div>
              </S.ModalContentDiv>
            </Animation1>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default UserTest;
