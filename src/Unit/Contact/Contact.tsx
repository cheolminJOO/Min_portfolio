/* eslint-disable */
import { useEffect, useState } from 'react';
import { ScrollAnimationContainer } from '../ScrollAnimation/ScrollAnimationContainer';
import * as S from './Contact.styles';
import NineCloudModal from '../Modal/NineCloud/NineCloudModal';
import BUSU from '../Modal/BUSU/BUSU';
import Instagram from '../Modal/Instagram/Instagram';
import Portfolio from '../Modal/Portfolio/Portfoilo';
import Animation3 from '../Animation/Animation3';
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';

interface IProps {
  isActiveFireWork: boolean;
  setIsActiveFireWork: React.Dispatch<React.SetStateAction<boolean>>;
}

const canvasStyles: React.CSSProperties = {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  zIndex: '3',
};

const Contact: React.FC<IProps> = ({
  isActiveFireWork,
  setIsActiveFireWork,
}) => {
  const [isFirstImage, setIsFirstImage] = useState(false);
  const [isSecondImage, setIsSecondImage] = useState(false);
  const [isThirdImage, setIsThirdImage] = useState(false);
  const [isFourthImage, setIsFourthImage] = useState(false);
  const decorateOptions = (originalOptions: any) => {
    return {
      ...originalOptions,
      particleCount: 100,
      spread: 180,
      startVelocity: 50,
      angle: -90,
      ticks: 200,
      origin: { x: 0.5, y: 0 },
      shapes: ['circle', 'circle', 'square'],
      gravity: 0.5,
    };
  };

  useEffect(() => {
    if (isActiveFireWork) {
      const timeoutId = setTimeout(() => {
        setIsActiveFireWork(false);
      }, 10000);
      return () => clearTimeout(timeoutId);
    }
  }, [isActiveFireWork]);

  const onClickFirstImg = () => {
    setIsFirstImage((prev) => !prev);
  };

  const onClickSecondImg = () => {
    setIsSecondImage((prev) => !prev);
  };

  const onClickThirdImg = () => {
    setIsThirdImage((prev) => !prev);
  };

  const onClickFourthImg = () => {
    setIsFourthImage((prev) => !prev);
  };

  return (
    <S.Container>
      {isFirstImage && <NineCloudModal onCloseModal={onClickFirstImg} />}
      {isSecondImage && <BUSU onCloseModal={onClickSecondImg} />}
      {isThirdImage && <Instagram onCloseModal={onClickThirdImg} />}
      {isFourthImage && <Portfolio onCloseModal={onClickFourthImg} />}
      <Animation3>
        <S.TextBox>
          <ScrollAnimationContainer>
            <S.FirstLineTextBox>
              <S.FirstText> 저는 주철민입니다.</S.FirstText>
            </S.FirstLineTextBox>
          </ScrollAnimationContainer>
        </S.TextBox>
      </Animation3>
      <S.ProjectBox>
        {isActiveFireWork && (
          <Fireworks
            autorun={{ speed: 0.5, duration: 10000 }}
            style={canvasStyles}
            decorateOptions={decorateOptions} // 함수 실행을 위해 괄호를 추가
          />
        )}
      </S.ProjectBox>
    </S.Container>
  );
};

export default Contact;
