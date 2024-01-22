import { useEffect, useState } from 'react';
import * as S from './Introduction.style';
import { ScrollAnimationContainer } from '../ScrollAnimation/ScrollAnimationContainer';

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
          <ScrollAnimationContainer>
            <S.HightLightText>부딪히는</S.HightLightText>
          </ScrollAnimationContainer>
        </S.FirstLineTextBox>
        <S.SecondText>개발자 주철민 입니다.</S.SecondText>
      </S.TextBox>
      <S.ProfileImg src='/cheolmin.png' alt='프로필이미지' />
    </S.Container>
  );
}
