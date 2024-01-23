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
                  <S.SubTitleSpan>
                    구글폼을 통해 유저 테스트 진행
                  </S.SubTitleSpan>
                </S.TitleBoxDiv>
                <div>
                  <S.ContentsText>기간</S.ContentsText>
                  <S.Contents>2023.12.28 ~ 2024.01.02 (5일 간 진행)</S.Contents>
                  <S.ContentsText>대상</S.ContentsText>
                  <S.Contents>커리어리, Slack 항해99 공개채널</S.Contents>
                  <S.ContentsText>내용</S.ContentsText>
                  <S.Contents>
                    1. 전체회의를 통해, 피드백 1차 정리<br></br> 2. 각 스택끼리
                    회의 진행, 피드백 2차 정리<br></br> 3. 색깔로 분류해 자신의
                    역할 정리 <br></br>4. 처리한 피드백은 줄긋기로 표시
                  </S.Contents>
                </div>
                <div>
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
