import React, { useState } from 'react';
import * as S from './Thinkness.styles';
import Animation4 from '../Animation/Animation4';

const Thinkness = () => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickButton = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <S.Container>
      <S.HeaderDiv>
        {!isClicked && (
          <S.ClickBoxDiv onClick={onClickButton}>
            <S.ClickText>C</S.ClickText>
            <S.ClickText>L</S.ClickText>
            <S.ClickText>I</S.ClickText>
            <S.ClickText>C</S.ClickText>
            <S.ClickText>K</S.ClickText>
          </S.ClickBoxDiv>
        )}
        {isClicked && (
          <Animation4>
            <S.TestBox>
              <S.BoxContainer>
                <S.TrainContainer>
                  <S.BoxDiv></S.BoxDiv>
                  <S.wheelCircleBox>
                    <S.WheelCircle></S.WheelCircle>
                    <S.WheelCircle></S.WheelCircle>
                  </S.wheelCircleBox>
                </S.TrainContainer>
                <S.ConnectionDiv>
                  <S.ConnectBarDiv></S.ConnectBarDiv>
                  <S.ConnectBarDiv></S.ConnectBarDiv>
                </S.ConnectionDiv>
                <S.TrainContainer>
                  <S.BoxDiv></S.BoxDiv>
                  <S.wheelCircleBox>
                    <S.WheelCircle></S.WheelCircle>
                    <S.WheelCircle></S.WheelCircle>
                  </S.wheelCircleBox>
                </S.TrainContainer>
                <S.ConnectionDiv>
                  <S.ConnectBarDiv></S.ConnectBarDiv>
                  <S.ConnectBarDiv></S.ConnectBarDiv>
                </S.ConnectionDiv>
                <S.TrainContainer>
                  <S.BoxDiv></S.BoxDiv>
                  <S.wheelCircleBox>
                    <S.WheelCircle></S.WheelCircle>
                    <S.WheelCircle></S.WheelCircle>
                  </S.wheelCircleBox>
                </S.TrainContainer>
                <S.ConnectionDiv>
                  <S.ConnectBarDiv></S.ConnectBarDiv>
                  <S.ConnectBarDiv></S.ConnectBarDiv>
                </S.ConnectionDiv>
              </S.BoxContainer>
              <S.TrainHeaderDiv>
                <S.SquareMiniDiv></S.SquareMiniDiv>
                <S.SquareDiv></S.SquareDiv>
                <S.LightHouseDiv>
                  <S.CheolMinImg
                    src='/ThumbsUpCM.png'
                    alt='철민'
                    onClick={onClickButton}
                  />
                </S.LightHouseDiv>
                <S.wheelCircleBox>
                  <S.WheelCircle></S.WheelCircle>
                  <S.TrainHeaderWheel></S.TrainHeaderWheel>
                </S.wheelCircleBox>
              </S.TrainHeaderDiv>
            </S.TestBox>
          </Animation4>
        )}
      </S.HeaderDiv>
    </S.Container>
  );
};

export default Thinkness;
