import React from 'react';
import * as S from './Think.styles';

const Think = () => {
  return (
    <S.container>
      <S.Title>Connecting the Dots</S.Title>
      <S.Contents>
        {' '}
        세상에 쓸모없는 경험은 없다고 믿어, 제 자리에 머물기 보다는 새로운
        사람을 만나고 다양한 경험을 하기위해 노력합니다.
      </S.Contents>
      <S.Title>Just Do it</S.Title>
      <S.Contents>
        {' '}
        무언가를 할 때, 망설이기 보다는 일단 시작하고 나서 최고의 결과물을 만들어내기 위해 최선을 다 합니다.
      </S.Contents>
    </S.container>
  );
};

export default Think;
