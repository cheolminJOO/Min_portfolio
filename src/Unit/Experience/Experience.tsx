import React from 'react';
import * as S from './Experience.styles';

const Experience = () => {
  const onClickChrome = () => {
    window.open(
      'https://ichworldforum.org/2022-%ec%84%b8%ea%b3%84%eb%ac%b4%ed%98%95%eb%ac%b8%ed%99%94%ec%9c%a0%ec%82%b0%ed%8f%ac%eb%9f%bc?lang=ko',
      '_blank'
    );
  };

  const onClickSecondChrome = () => {
    window.open('https://zep.us/play/2mYqBe', '_blank');
  };

  return (
    <S.Container>
      <S.TextBox>
        <S.FirstLineTextBox>
          <S.FirstText> What I Experienced? </S.FirstText>
        </S.FirstLineTextBox>
      </S.TextBox>
      <S.ProjectBox>
        <S.ProjectBoxDiv>
          <S.TitleAndNumberBox>
            <S.TitleAndNumber>
              <S.Numbering>01 </S.Numbering>
              <S.TitleSpan>2022 ICH World Forum</S.TitleSpan>
              <S.SubTitleSpan>2022 세계무형문화유산포럼 </S.SubTitleSpan>
            </S.TitleAndNumber>
            <div>
              <S.YoutubeImg
                onClick={onClickChrome}
                src='/chrome.png'
                alt='크롬 로고 '
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
              />
            </div>
          </S.TitleAndNumberBox>
          <div>
            <S.ProjectImg
              src='/ICHWORLDFORUM.png'
              alt='포럼'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
            />
          </div>
        </S.ProjectBoxDiv>
        <S.ProjectBoxDiv>
          <S.TitleAndNumberBox>
            <S.TitleAndNumber>
              <S.Numbering>02 </S.Numbering>
              <S.TitleSpan>2022 ICH Youth Forum</S.TitleSpan>
              <S.SubTitleSpan>2022 세계 청년포럼</S.SubTitleSpan>
            </S.TitleAndNumber>
            <div>
              <S.YoutubeImg
                onClick={onClickSecondChrome}
                src='/chrome.png'
                alt='유튜브 로고'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
              />
            </div>
          </S.TitleAndNumberBox>
          <div>
            <S.ProjectImg
              src='/ICHYOUTHFORUM.png'
              alt='BUSU Logo'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
            />
          </div>
        </S.ProjectBoxDiv>
        <S.ProjectBoxDiv>
          <S.TitleAndNumberBox>
            <S.TitleAndNumber>
              <S.Numbering>03 </S.Numbering>
              <S.TitleSpan>EPIS Intern</S.TitleSpan>
              <S.SubTitleSpan>컨텐츠 제작 </S.SubTitleSpan>
            </S.TitleAndNumber>
            <div>
              <S.YoutubeImg
                src='/youtubeLogo.png'
                alt='유튜브 로고'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
              />
            </div>
          </S.TitleAndNumberBox>
          <div>
            <S.ProjectImg
              src='/EPIS.png'
              alt='instagram logo'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
            />
          </div>
        </S.ProjectBoxDiv>
        <S.ProjectBoxDiv>
          <S.TitleAndNumberBox>
            <S.TitleAndNumber>
              <S.Numbering>04 </S.Numbering>
              <S.TitleSpan>KISTEP</S.TitleSpan>
              <S.SubTitleSpan>컨텐츠 기획 및 제작 </S.SubTitleSpan>
            </S.TitleAndNumber>
            <div>
              <S.YoutubeImg
                src='/youtubeLogo.png'
                alt='유튜브 로고'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
              />
            </div>
          </S.TitleAndNumberBox>
          <div>
            <img src='/KISTEP.png' alt='instagram logo' />
          </div>
        </S.ProjectBoxDiv>
        <div></div>
        <div></div>
      </S.ProjectBox>
    </S.Container>
  );
};

export default Experience;
