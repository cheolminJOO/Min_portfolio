/* eslint-disable */
import { useEffect, useState } from 'react';
import { ScrollAnimationContainer } from '../ScrollAnimation/ScrollAnimationContainer';
import * as S from './Contact.styles';
import NineCloudModal from '../Modal/NineCloud/NineCloudModal';
import BUSU from '../Modal/BUSU/BUSU';
import Instagram from '../Modal/Instagram/Instagram';
import Portfolio from '../Modal/Portfolio/Portfoilo';
import Animation3 from '../Animation/Animation3';

interface IProps {
  isActiveFireWork: boolean;
  setIsActiveFireWork: React.Dispatch<React.SetStateAction<boolean>>;
}


const Contact: React.FC<IProps> = ({
  isActiveFireWork,
  setIsActiveFireWork,
}) => {
  const [isFirstImage, setIsFirstImage] = useState(false);
  const [isSecondImage, setIsSecondImage] = useState(false);
  const [isThirdImage, setIsThirdImage] = useState(false);
  const [isFourthImage, setIsFourthImage] = useState(false);
  

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
          <S.FirstLineTextBox>
            <ScrollAnimationContainer>
              <S.Title> Contact ME !</S.Title>
            </ScrollAnimationContainer>
          </S.FirstLineTextBox>
        </S.TextBox>
      </Animation3>
      <S.ProjectBox>
        <S.ContentsBox>
          <div>
            <S.Title>Github : </S.Title>
            <S.FirstText target='_blank' href='https://github.com/cheolminJOO'>
              https://github.com/cheolminJOO
            </S.FirstText>
          </div>
          <div>
            <S.Title>E-mail : </S.Title>
            <S.FirstText href='mailto:cheolmin.joo@gmail.com'>
              cheolmin.joo@gmail.com
            </S.FirstText>
          </div>
        </S.ContentsBox>
      </S.ProjectBox>
    </S.Container>
  );
};

export default Contact;
