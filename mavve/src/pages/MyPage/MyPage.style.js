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

export const EditIconBtn = styled.button`
  display: flex;
  width: 3rem;
  height: 3rem;
  padding: 0.75rem;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  border-radius: 1.5rem;
  background: var(--pri);
  cursor: pointer;

  &:hover {
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      #009bff;
  }

  &:active {
    display: flex;
    width: 2.75rem;
    height: 2.75rem;
    padding: 0.75rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
    aspect-ratio: 1/1;
    border-radius: 1.5rem;
    background: var(--pri, #009bff);
  }
`;

export const EditIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
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

export const CreateRoomBtn = styled.button`
  display: flex;
  width: 7.0625rem;
  height: 2.0625rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 0.5rem 1rem;
  gap: 0.25rem;
  border-radius: 1.875rem;
  background: var(--pri);

  color: #ffffff;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      #009bff;
  }

  &:active {
    display: flex;
    width: 6.8125rem;
    height: 1.8125rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    padding: 0.375rem 0.875rem;
    gap: 0.25rem;
    border-radius: 1.875rem;
    background: var(--pri);
  }
`;

export const PlusIcon = styled.img`
  width: 0.75rem;
  height: 0.75rem;
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
  height: 18.875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 2rem 1.94rem 3rem;
`;

export const LikedRoomContainer = styled.div`
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

/////////////////////////////////////////////////
//LikedRoomPage, MyRoomPage

export const PageHeader = styled.div`
  display: flex;
  width: 91.94rem;
  height: 2.06rem;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem 0 1.5rem 4.5rem;
`;

export const PageRoomContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2.5rem;
  padding: 0 4rem 1.25rem 4rem;
`;

//
