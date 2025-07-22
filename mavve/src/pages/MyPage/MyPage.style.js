import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #caedff;
`;

export const TopBarContainer = styled.div`
  width: 120rem;
  height: 86.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MainContainer = styled.div`
  width: 120rem;
  height: 72.75rem;
  margin-bottom: 5.5rem;
  display: flex;
  flex-direction: row;
`;

export const SidebarContainer = styled.div`
  width: 16.5625rem;
  height: 52.625rem;
  margin: 0.5rem 2rem 0 1.5rem;
`;

export const Main = styled.div`
  width: 97.9375rem;
  height: 52.625rem;

  margin: 0.5rem 2rem 0 0;
`;

// export const Playbar = styled.div`
//   width: 1920px;
//   height: 88px;
//   background-color: rgb(87, 87, 87); //영역 구별용, 추후 삭제
//   margin-top: 16px;
// `;

export const ProfileContainer = styled.div`
  width: 97.875rem;
  height: 20rem;
`;

export const WaveImg = styled.img`
  width: 97.875rem;
  height: 20rem;
  position: sticky;
`;

export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0 0 60px;
  position: relative;
  margin-top: -320px;
  /* position: absolute; 
  z-index: 1; */
`;

export const ProfileImage = styled.img`
  width: 14.25rem;
  height: 14.25rem;
  object-fit: cover; //이미지 비율 유지
  border-radius: 50%; //이미지 동그란 형태로 자르기
`;

export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  color: var(--b);
`;

export const Nickname = styled.div`
  font-size: 3.75rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const UserCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-right: 1.5rem;
`;
export const UserText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const EditIcon = styled.img`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

export const ViewArea = styled.div`
  width: 97.9375rem;
  height: 52.625rem;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  box-shadow: inset 0 0 0 3px #ffffff; //내부 테두리 구현
  overflow: scroll;
  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
`;

export const OneLineNoteContainer = styled.div`
  width: 92.875rem;
  height: 10.5938rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1.91rem 2.06rem 2rem 3rem;
`;

export const MyRoomArea = styled.div`
  width: 93rem;
  height: 18.875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 2rem 1.94rem 3rem;
`;
export const MyRoomHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CreateRoomBtn = styled.img`
  display: flex;
  width: 7.0625rem;
  height: 2.0625rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const MyRoomContainer = styled.div`
  display: flex;
  width: 93rem;
  height: 16rem;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding-bottom: 0.5rem;

  overflow-x: auto;
  overflow-y: hidden;

  //scroll-snap-type: x mandatory;

  & > * {
    flex: 0 0 auto;
    scroll-snap-align: start;
  }

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: #ccc;
  }
`;

export const LikedRoomArea = styled.div`
  width: 93rem;
  height: 16.875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 2rem 1.25rem 3rem;
`;

export const LikedRoomContainer = styled.div`
  display: flex;
  width: 93rem;
  height: 14rem;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  overflow-x: auto;
  scrollbar-width: thin; /* for Firefox */
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
`;

export const Title = styled.div`
  color: var(--b);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
`;
export const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
`;
export const NoticeLarge = styled.div`
  width: 100%;
  align-self: stretch;
  margin-bottom: 1rem;

  color: var(--g4);
  text-align: center;

  /* MAVVE/Caption/Headline/Medium */

  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const NoticeSmall = styled.div`
  color: var(--g4, #93959b);
  text-align: center;

  /* MAVVE/Caption/Title/Large */

  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

//프로필 편집 모달//////////////////////////////////////////////
export const ProfileEditBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ProfileEditBox = styled.div`
  width: 44rem;
  height: 23.5rem;
  flex-shrink: 0;
  border-radius: 5rem;
  background-color: var(--w);
  margin: 18.8rem 31.3rem 25.3rem 44.8rem;
  //피그마대로 했는데 화면과 달라서 조정 필요할 듯..
  display: flex;
  flex-direction: column;
`;

export const ProfileEditHeader = styled.div`
  display: flex;
  width: 37rem;
  height: 2rem;
  flex-direction: row;
  justify-content: space-between;
  flex-shrink: 0;
  color: var(--b);
  font-weight: 500;
  font-size: 1.875rem;
  margin: 2rem 2rem 1rem 5rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    aspect-ratio: 1/1;
    cursor: pointer;
  }
`;

export const ProfileEditArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ProfileImgContainer = styled.div`
  display: flex;
  width: 15rem;
  height: 15rem;
  align-items: center;
  justify-content: center;
  padding-right: 2rem;
  border-right: 0.03125rem solid var(--b);
  margin-right: 3rem;
`;

export const ProfileImgEdit = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 7.5rem;
  border: 1px solid var(--b);
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const ProfileEditInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //gap: 1rem;
  color: var(--b);
  font-size: 1.5rem;
  font-weight: 600;

  input {
    display: flex;
    width: 19.875rem;
    height: 3.5rem;
    padding: 1.0625rem 1.5rem;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    margin: 0.5rem 2.13rem 3.81rem 0;
    border-radius: 1.5rem;
    border: 1px solid var(--b);
    background: var(--g1);
    color: var(--b);

    /* MAVVE/Caption/Body/Large */

    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 133.333% */
  }
`;

export const SaveButton = styled.button`
  display: flex;
  width: 6.5rem;
  height: 3.5rem;
  padding: 0.5rem 1.5rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 1.875rem;
  background: var(--pri);
  color: var(--w);
  align-self: flex-end;
  margin-right: 2rem;

  /* MAVVE/Caption/Title/Small */
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */
`;

/////////////////////////////////////////////////
