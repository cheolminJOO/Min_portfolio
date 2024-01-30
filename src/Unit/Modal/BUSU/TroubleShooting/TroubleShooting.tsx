import React, { useState } from 'react';
import * as S from './TroubleShooting.styles';

const TroubleShooting = () => {
  const [isSecondTrouble, setIsSecondTrouble] = useState(false);

  const onClickFirstBtn = () => {
    setIsSecondTrouble(false);
  };

  const onClickSecondBtn = () => {
    setIsSecondTrouble(true);
  };

  return (
    <S.Container>
      {!isSecondTrouble && (
        <S.ContentsBoxDiv>
          <S.TitleText>문제 1 | 이미지 업로드</S.TitleText>
          <S.Contents>
            <S.SubTitle>ο 상황 </S.SubTitle>
            <S.SubTitleContents>
              이미지 업로드 소요시간 증가 및 서버 부담 증가
            </S.SubTitleContents>
            <S.SollutionTitle>ο 해결방법</S.SollutionTitle>
            <S.FirstSollution>[1단계] </S.FirstSollution>
            <S.FirstSollutionContents>
              FileReader를 활용해 이미지 파일을 데이터 URL로 변경해서 사용
            </S.FirstSollutionContents>
            <S.SollutionTitle>ο 적용효과</S.SollutionTitle>
            <S.FirstSollutionContents>
              LCP 시간 3.5초에서 0.9초로 단축 및 이미지 찌꺼기 방지
            </S.FirstSollutionContents>
          </S.Contents>
        </S.ContentsBoxDiv>
      )}
      {isSecondTrouble && (
        <S.ContentsBoxDiv>
          <S.TitleText>문제 2 | 게시판 검색 기능</S.TitleText>
          <S.Contents>
            <S.SubTitle>ο 상황 </S.SubTitle>
            <S.SubTitleContents>
              - 검색창에 검색어를 입력할 때마다, api 요청
            </S.SubTitleContents>
            <S.SollutionTitle>ο 해결방법</S.SollutionTitle>
            <S.FirstSollution>[1단계] </S.FirstSollution>
            <S.FirstSollutionContents>
              debounce를 적용해 마지막 검색어 입력 후 0.5초 동안 아무런 동작이
              없을 시 api 요청
            </S.FirstSollutionContents>
            <S.EffectTitle>ο 적용효과</S.EffectTitle>
            <S.EffectContents>
              - 서버의 트래픽 부담 감소 및 부드러운 서비스 경험 제공
            </S.EffectContents>
          </S.Contents>
        </S.ContentsBoxDiv>
      )}
      <S.PaginationDiv>
        <button onClick={onClickFirstBtn}>1</button>
        <button onClick={onClickSecondBtn}>2</button>
      </S.PaginationDiv>
    </S.Container>
  );
};

export default TroubleShooting;
