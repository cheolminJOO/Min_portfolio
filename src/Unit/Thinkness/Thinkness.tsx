import React from 'react';
import * as S from './Thinkness.styles';
import Animation4 from '../Animation/Animation4';
import Think from './Think/Think';
import Why from './Why/Why';
import Favorite from './Favorite/Favorite';
import Animation5 from '../Animation/Animation.5';

interface ITrain {
  isClicked: boolean;
}

const Thinkness: React.FC<ITrain> = ({ isClicked }) => {
  return (
    <S.Container>
      <S.HeaderDiv>
        {isClicked && (
          <div>
            <S.MovingContainer>
              <Animation5>
                <S.Sun src='/sun.png' alt='해' />
                <S.Cloud src='/grayCloud.png' alt='회색구름' />
              </Animation5>
            </S.MovingContainer>
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
                    <S.BoxDiv>
                      <Think />
                    </S.BoxDiv>
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
                      <S.TitleSpan>개발자가 된 이유</S.TitleSpan>
                    </S.Roof>
                    <S.RoofConnectionBox>
                      <S.RoofConnectionDiv></S.RoofConnectionDiv>
                      <S.RoofConnectionDiv></S.RoofConnectionDiv>
                    </S.RoofConnectionBox>
                    <S.BoxDiv>
                      <Why />
                    </S.BoxDiv>
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
                      <S.TitleSpan>좋아하는 것</S.TitleSpan>
                    </S.Roof>
                    <S.RoofConnectionBox>
                      <S.RoofConnectionDiv></S.RoofConnectionDiv>
                      <S.RoofConnectionDiv></S.RoofConnectionDiv>
                    </S.RoofConnectionBox>
                    <S.BoxDiv>
                      <Favorite />
                    </S.BoxDiv>
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
          </div>
        )}
      </S.HeaderDiv>
    </S.Container>
  );
};

export default Thinkness;
