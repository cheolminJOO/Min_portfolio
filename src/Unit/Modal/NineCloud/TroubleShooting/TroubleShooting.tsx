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
          <S.HeaderDiv>
            <S.TitleText>트러블슈팅 1 | 달력 구조</S.TitleText>
            <S.VelogBtn>기록</S.VelogBtn>
          </S.HeaderDiv>
          <S.Contents>
            <S.SubTitle>ο 상황 </S.SubTitle>
            <S.SubTitleContents>
              해당 '월'의 1일이 무슨 요일이든, 제일 첫 번째 칸에 위치하는 문제
              발생
            </S.SubTitleContents>
            <S.SollutionTitle>ο 해결방법</S.SollutionTitle>
            <S.FirstSollution>[1단계] </S.FirstSollution>
            <S.FirstSollutionContents>
              해당 '월'의 1일의 위치를 구하는 로직 구성
            </S.FirstSollutionContents>
            <S.FirstSollution>[2단계] </S.FirstSollution>
            <S.FirstSollutionContents>
              1일이 주의 시작인 월요일과 멀어진 숫자만큼 0이란 값을 넣는 로직
              추가
            </S.FirstSollutionContents>
            <S.SollutionTitle>ο 적용효과</S.SollutionTitle>
            <S.FirstSollutionContents>
              달력의 첫 번째 날이 제대로 된 위치에 출력
            </S.FirstSollutionContents>
          </S.Contents>
        </S.ContentsBoxDiv>
      )}
      {isSecondTrouble && (
        <S.ContentsBoxDiv>
          <S.HeaderDiv>
            <S.TitleText>트러블슈팅 2 | 일기 등록 및 수정</S.TitleText>
            <S.VelogBtn>기록</S.VelogBtn>
          </S.HeaderDiv>
          <S.Contents>
            <S.SubTitle>ο 상황 </S.SubTitle>
            <S.SubTitleContents>
              - 태그명이 같이 출력되는 문제와 XSS 공격에 대한 보안 개선 필요
            </S.SubTitleContents>
            <S.SollutionTitle>ο 해결방법</S.SollutionTitle>
            <S.FirstSollution>[1단계] </S.FirstSollution>
            <S.FirstSollutionContents>
              dangerouslySetInnerHTML을 사용해 태그 없이 출력
            </S.FirstSollutionContents>
            <S.FirstSollution>[2단계] </S.FirstSollution>
            <S.FirstSollutionContents>
              DOMPurify라는 HTML을 sanitize 해주는 라이브러리 활용
            </S.FirstSollutionContents>
            <S.EffectTitle>ο 적용효과</S.EffectTitle>
            <S.EffectContents>
              - 태그 없이 글자만 출력이 되고, XSS 공격에 대한 보안 강화
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
