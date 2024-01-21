import * as S from './Cheolmin.styles';

const Cheolmin = () => {
  return (
    <S.Container>
      <S.TextBox>
        <S.FirstLineTextBox>
          <S.FirstText> 저는 ____ 하는 사람입니다. </S.FirstText>
        </S.FirstLineTextBox>
      </S.TextBox>
      <S.ProjectBox>
        <S.ProjectBoxDiv>
          <S.TitleAndNumberBox>
            <S.TitleAndNumber>
              <S.Numbering>01 </S.Numbering>
              <S.TitleSpan>"꾸준히"</S.TitleSpan>
              <S.SubTitleSpan>평균 주 5회 TIL을 작성 </S.SubTitleSpan>
            </S.TitleAndNumber>
            <div>
              <S.YoutubeImg
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
              <S.TitleSpan>"UX 관점에서 개발"</S.TitleSpan>
              <S.SubTitleSpan>2022 세계 청년포럼</S.SubTitleSpan>
            </S.TitleAndNumber>
            <div>
              <S.YoutubeImg
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
              <S.TitleSpan>"다 같이 함께"</S.TitleSpan>
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
              <S.TitleSpan>"도전"</S.TitleSpan>
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

export default Cheolmin;
