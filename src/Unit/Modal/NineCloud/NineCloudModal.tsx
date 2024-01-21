import Portal from '../../Portal/Portal';
import * as S from './NineCloudModal.styles';
import { IOnClose } from './NineCloudModal.types';

const NineCloudModal: React.FC<IOnClose> = ({ onClose }) => {
  return (
    <Portal>
      <S.ContainerDiv onClick={onClose}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <S.ModalContentDiv>
              <S.TitleBoxDiv>
                <S.TitleSpan>Nine Cloud</S.TitleSpan>
                <S.SubTitleSpan>입력하신 내용이 모두 사라져요!</S.SubTitleSpan>
              </S.TitleBoxDiv>
              <div>
                <table>
                  <tr>
                    <S.ContentsTitle>
                      <strong>소셜 로그인</strong>
                    </S.ContentsTitle>
                    <S.ContentsTitle>
                      <strong>달력 페이지</strong>
                    </S.ContentsTitle>
                    <S.ContentsTitle>
                      <strong>그림 그리기</strong>
                    </S.ContentsTitle>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src='https://lv4lv4task.s3.ap-northeast-2.amazonaws.com/readme/gif_loginpage.gif'
                        alt='소셜 로그인'
                        style={{ width: '10rem', height: '16rem' }}
                      />
                    </td>
                    <td>
                      <img
                        src='https://lv4lv4task.s3.ap-northeast-2.amazonaws.com/readme/gif_mainpage.gif'
                        alt='메인'
                        style={{ width: '10rem', height: '16rem' }}
                      />
                    </td>
                    <td>
                      <img
                        src='https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/post.gif'
                        alt='일기 추가하기'
                        style={{ width: '10rem', height: '16rem' }}
                      />
                    </td>
                  </tr>
                </table>

                <table>
                  <tr>
                    <S.ContentsTitle>
                      <strong>AI open api</strong>
                    </S.ContentsTitle>
                    <S.ContentsTitle>
                      <strong>무한스크롤</strong>
                    </S.ContentsTitle>
                    <S.ContentsTitle>
                      <strong>채팅방</strong>
                    </S.ContentsTitle>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src='https://lv4lv4task.s3.ap-northeast-2.amazonaws.com/readme/gif_gptpage.gif'
                        alt='AI'
                        style={{ width: '10rem', height: '16rem' }}
                      />
                    </td>
                    <td>
                      <img
                        src='https://lv4lv4task.s3.ap-northeast-2.amazonaws.com/readme/gif_communitypage.gif'
                        alt='커뮤니티'
                        style={{ width: '10rem', height: '16rem' }}
                      />
                    </td>
                    <td>
                      <img
                        src='https://lv4lv4task.s3.ap-northeast-2.amazonaws.com/readme/gif_chatting.gif'
                        alt='채팅방'
                        style={{ width: '10rem', height: '16rem' }}
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </S.ModalContentDiv>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default NineCloudModal;
