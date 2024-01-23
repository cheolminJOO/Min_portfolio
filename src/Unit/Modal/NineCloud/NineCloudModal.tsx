import Animation2 from '../../Animation/Animation2';
import Portal from '../../Portal/Portal';
import * as S from './NineCloudModal.styles';
import { IOnClose } from './NineCloudModal.types';

const NineCloudModal: React.FC<IOnClose> = ({ onCloseModal }) => {
  const onClickGithub = () => {
    window.open('https://github.com/final-project-hh99/front', '_blank');
  };

  const onClickYoutube = () => {
    window.open('https://www.youtube.com/watch?v=Ha4b-zM9gzc', '_blank');
  };

  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <Animation2>
              <S.ModalContentDiv>
                <S.TitleBoxDiv>
                  <S.TitleSpan>Nine Cloud</S.TitleSpan>
                  <S.SubTitleSpan>
                    AI 솔루션 감정일기 클라우드 서비스
                  </S.SubTitleSpan>
                </S.TitleBoxDiv>
                <div>
                  <S.ContentsText>기간 : 2023.12 ~ 2024.01</S.ContentsText>
                  <S.ContentsText>
                    Tech Stack : React, Styled-Components, Recoil
                  </S.ContentsText>
                  <S.ContentsText>
                    역할 1. 홈페이지 제작 업무 참여 2. 포럼
                  </S.ContentsText>
                  <S.ContentsText>
                    성과 : SEO 최적화로 전년 대비 방문자율 40% 상승
                  </S.ContentsText>
                </div>
                <div>
                  <S.GithubImg
                    onClick={onClickGithub}
                    src='/git.png'
                    alt='깃허브'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                  />
                  <S.YoutubeImg
                    onClick={onClickYoutube}
                    src='/youtubeLogo.png'
                    alt='유튜브 로고'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                  />
                </div>
              </S.ModalContentDiv>
            </Animation2>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default NineCloudModal;
