import * as S from './Project.styles';

const Project = () => {
  const onClickFirstGithub = () => {
    window.open('https://github.com/final-project-hh99/front', '_blank');
  };

  const onClickFirstYoutube = () => {
    window.open('https://www.youtube.com/watch?v=Ha4b-zM9gzc', '_blank');
  };

  const onClickSecondGithub = () => {
    window.open(
      'https://github.com/cheolminJOO/Buying-and-Selling-Used-Stuff',
      '_blank'
    );
  };

  const onCLickThirdGithub = () => {
    window.open('https://github.com/insta-clone-hh99/front', '_blank');
  };

  const onClickFourthGithub = () => {
    window.open('https://github.com/cheolminJOO/Min_portfolio', '_blank');
  };

  return (
    <S.Container>
      <S.TextBox>
        <S.FirstLineTextBox>
          <S.FirstText> What I Did ? </S.FirstText>
        </S.FirstLineTextBox>
      </S.TextBox>
      <S.ProjectBox>
        <S.ProjectBoxDiv>
          <S.TitleAndNumberBox>
            <S.TitleAndNumber>
              <S.Numbering>01 </S.Numbering>
              <S.TitleSpan>Nine Cloud</S.TitleSpan>
              <S.SubTitleSpan>AI 솔루션 감정 일기 </S.SubTitleSpan>
            </S.TitleAndNumber>
            <div>
              <S.GithubImg
                onClick={onClickFirstGithub}
                src='/github.png'
                alt='깃허브'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
              />
              <S.YoutubeImg
                onClick={onClickFirstYoutube}
                src='/youtubeLogo.png'
                alt='유튜브 로고'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
              />
            </div>
          </S.TitleAndNumberBox>
          <div>
            <S.ProjectImg
              src='/nine-cloud.png'
              alt='나인클라우드'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
            />
          </div>
        </S.ProjectBoxDiv>
        <S.ProjectBoxDiv>
          <S.TitleAndNumberBox>
            <S.TitleAndNumber>
              <S.Numbering>02 </S.Numbering>
              <S.TitleSpan>BUSU</S.TitleSpan>
              <S.SubTitleSpan>중고상품 커뮤니티</S.SubTitleSpan>
            </S.TitleAndNumber>
            <div>
              <S.GithubImg
                onClick={onClickSecondGithub}
                src='/github.png'
                alt='깃허브'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
              />
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
              src='/BUSU.png'
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
              <S.TitleSpan>INSTAGRAM(CLONE)</S.TitleSpan>
              <S.SubTitleSpan>인스타그램 클론 사이트 </S.SubTitleSpan>
            </S.TitleAndNumber>
            <div>
              <S.GithubImg
                onClick={onCLickThirdGithub}
                src='/github.png'
                alt='깃허브'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
              />
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
              src='/insta.png'
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
              <S.TitleSpan>Portfoilo</S.TitleSpan>
              <S.SubTitleSpan>포트폴리오 사이트 </S.SubTitleSpan>
            </S.TitleAndNumber>
            <div>
              <S.GithubImg
                onClick={onClickFourthGithub}
                src='/github.png'
                alt='깃허브'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
              />
              <S.YoutubeImg
                src='/youtubeLogo.png'
                alt='유튜브 로고'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
              />
            </div>
          </S.TitleAndNumberBox>
          <div>
            <img src='/insta.png' alt='instagram logo' />
          </div>
        </S.ProjectBoxDiv>
        <div></div>
        <div></div>
      </S.ProjectBox>
    </S.Container>
  );
};

export default Project;
