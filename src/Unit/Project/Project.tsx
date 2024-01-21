import * as S from './Project.styles';

const Project = () => {
  const onClickGithub = () => {
    window.open('https://github.com/final-project-hh99/front', '_blank');
  };

  return (
    <S.Container>
      <S.TextBox>
        <S.FirstLineTextBox>
          <S.HightLightText>Projects</S.HightLightText>
          <S.FirstText> 개발자</S.FirstText>
        </S.FirstLineTextBox>
        <S.SecondText>주철민 입니다.</S.SecondText>
      </S.TextBox>
      <S.ProjectBox>
        <S.ProjectBoxDiv>
          <S.TitleAndNumberBox>
            <S.TitleAndNumber>
              <S.Numbering>01 </S.Numbering>
              <S.TitleSpan>Nine Cloud</S.TitleSpan>
            </S.TitleAndNumber>
            <S.GithubImg
              onClick={onClickGithub}
              src='/github.png'
              alt='깃허브'
            />
          </S.TitleAndNumberBox>
          <div>
            <img src='/nine-cloud.png' alt='나인클라우드' />
          </div>
        </S.ProjectBoxDiv>
        <S.ProjectBoxDiv>
          <S.TitleAndNumberBox>
            <S.TitleAndNumber>
              <S.Numbering>02 </S.Numbering>
              <S.TitleSpan>BUSU</S.TitleSpan>
            </S.TitleAndNumber>
            <S.GithubImg
              onClick={onClickGithub}
              src='/github.png'
              alt='깃허브'
            />
          </S.TitleAndNumberBox>
          <div>
            <img src='/BUSU.png' alt='BUSU Logo' />
          </div>
        </S.ProjectBoxDiv>
        <S.ProjectBoxDiv>
          <S.TitleAndNumberBox>
            <S.TitleAndNumber>
              <S.Numbering>03 </S.Numbering>
              <S.TitleSpan>INSTAGRAM(CLONE)</S.TitleSpan>
            </S.TitleAndNumber>
            <S.GithubImg
              onClick={onClickGithub}
              src='/github.png'
              alt='깃허브'
            />
          </S.TitleAndNumberBox>
          <div>
            <img src='/insta.png' alt='instagram logo' />
          </div>
        </S.ProjectBoxDiv>
        <S.ProjectBoxDiv>
          <S.TitleAndNumberBox>
            <S.TitleAndNumber>
              <S.Numbering>04 </S.Numbering>
              <S.TitleSpan>Portfoilo</S.TitleSpan>
            </S.TitleAndNumber>
            <S.GithubImg
              onClick={onClickGithub}
              src='/github.png'
              alt='깃허브'
            />
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
