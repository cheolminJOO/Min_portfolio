import { useEffect, useState } from 'react';
import * as S from './Introduction.style';

export default function Introduction() {
  const completionWord = '부딪히는_';

  const [blogTitle, setBlogTitle] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        const result = prevTitleValue
          ? prevTitleValue + completionWord[count]
          : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setBlogTitle('');
        }

        return result;
      });
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <S.Container>
      <S.TextBox>
        <S.SecondText>안녕하세요.</S.SecondText>
        <S.FirstLineTextBox>
          <S.HightLightText>{blogTitle}</S.HightLightText>
        </S.FirstLineTextBox>
        {!blogTitle && <S.BlankDiv></S.BlankDiv>}
        <S.SecondText>개발자 주철민 입니다.</S.SecondText>
      </S.TextBox>
      <S.ProfileImg src='/cheolmin.png' alt='프로필이미지' />
    </S.Container>
  );
}
