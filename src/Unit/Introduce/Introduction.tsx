import * as S from './Introduction.style';

export default function Introduction() {
  return (
    <S.Container>
      <S.TextBox>
        <S.FirstLineTextBox>
          <S.HightLightText>"부딪히는"</S.HightLightText>
          <S.FirstText> 개발자</S.FirstText>
        </S.FirstLineTextBox>
        <S.SecondText>주철민 입니다.</S.SecondText>
      </S.TextBox>
    </S.Container>
  );
}
