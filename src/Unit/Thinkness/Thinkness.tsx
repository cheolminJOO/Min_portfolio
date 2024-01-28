import React, { useState } from 'react';
import * as S from './Thinkness.styles';
import Animation4 from '../Animation/Animation4';

interface ITrain {
  isClicked: boolean;
}

const Thinkness: React.FC<ITrain> = ({ isClicked }) => {
  return (
    <S.Container>
      <S.HeaderDiv>
        {!isClicked && (
          <S.ClickBoxDiv>
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
                  <S.Roof>
                    <S.TitleSpan>가치관</S.TitleSpan>
                  </S.Roof>
                  <S.RoofConnectionBox>
                    <S.RoofConnectionDiv></S.RoofConnectionDiv>
                    <S.RoofConnectionDiv></S.RoofConnectionDiv>
                  </S.RoofConnectionBox>
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
                  <S.Roof>
                    <S.TitleSpan>가치관</S.TitleSpan>
                  </S.Roof>
                  <S.RoofConnectionBox>
                    <S.RoofConnectionDiv></S.RoofConnectionDiv>
                    <S.RoofConnectionDiv></S.RoofConnectionDiv>
                  </S.RoofConnectionBox>
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
                  <S.Roof>
                    <S.TitleSpan>가치관</S.TitleSpan>
                  </S.Roof>
                  <S.RoofConnectionBox>
                    <S.RoofConnectionDiv></S.RoofConnectionDiv>
                    <S.RoofConnectionDiv></S.RoofConnectionDiv>
                  </S.RoofConnectionBox>
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
                {/* <S.Cloud src='/grayCloud.png' alt='구름' /> */}
                <S.SquareMiniDiv></S.SquareMiniDiv>
                <S.SquareDiv></S.SquareDiv>
                <S.LightHouseDiv>
                  <S.CheolMinImg
                    src='/ThumbsUpCM.png'
                    alt='철민'
                    // onClick={onClickButton}
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
