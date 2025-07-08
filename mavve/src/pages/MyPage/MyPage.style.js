import styled from "styled-components";

const colors = {
  pri: "#009BFF",
  sec: "#65C3FF",
  trd: "#E4F6FF",
  g1: "#F3F4F6",
  g2: "#D7D9DD",
  g3: "#BFC4CA",
  g4: "#93959B",
  b: "#3C3E44",
  w: "#FCFEFF",
  fth: "#CFEFFF",
  sixth: "#46A1DB",
  seventh: "#005993",
  red: "#FA7878",
};

export const Container = styled.div`
  /* width: 1920px;
  //height: 1378px;
  height: 1080px; */
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #caedff;
`;

export const Header = styled.div`
  //검색 바, 알림 아이콘 등 포함되는 영역
  /* width: 1920px;
  height: 126px; */
  width: 120rem;
  height: 86.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray; //영역 구별용 임시 색. 실제는 색상 x
`;
export const MainContainer = styled.div`
  /* width: 1920px;
  height: 866px; */
  width: 120rem;
  height: 72.75rem;
  margin-bottom: 5.5rem;
  display: flex;
  flex-direction: row;
`;

export const Sidebar = styled.div`
  /* width: 265px;
  height: 842px; */
  width: 16.5625rem;
  height: 52.625rem;
  background-color: gray; //영역 구별용, 추후 삭제
  margin: 0.5rem 2rem 0 1.5rem;
`;

export const Main = styled.div`
  /* width: 1567px;
  height: 842px; */
  width: 97.9375rem;
  height: 52.625rem;
  //background-color: gray; //영역 구별용, 추후 삭제
  margin: 0.5rem 2rem 0 0;
`;

// export const Playbar = styled.div`
//   width: 1920px;
//   height: 88px;
//   background-color: rgb(87, 87, 87); //영역 구별용, 추후 삭제
//   margin-top: 16px;
// `;

export const ProfileContainer = styled.div`
  width: 1566px;
  height: 320px;
`;

export const WaveImg = styled.img`
  /* width: 1566px;
  height: 320px; */
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
  width: 228px;
  height: 228px;
  object-fit: cover; //이미지 비율 유지
  border-radius: 50%; //이미지 동그란 형태로 자르기
`;

export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  color: ${colors.b};
`;

export const Nickname = styled.div`
  font-size: 60px;
  font-weight: 400;
  margin-bottom: 16px;
`;

export const UserCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-right: 24px;
`;
export const UserText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 400;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const EditIcon = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

export const ViewArea = styled.div`
  width: 1567px;
  height: 842px;
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

export const DiaryArea = styled.div`
  /* width: 1486px;
  height: 169.5px; */
  width: 92.875rem;
  height: 10.5938rem;
  background-color: white; //임시
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1.91rem 33px 32px 48px;
`;

export const MyRoomArea = styled.div`
  /* width: 1487px;
  height: 270px; */
  width: 92.875rem;
  height: 16.875rem;
  background-color: white; //임시
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 32px 31px 48px;
`;

export const LikedRoomArea = styled.div`
  width: 1487px;
  height: 270px;
  background-color: white; //임시
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 32px 20px 48px; //스크롤 설정 이후 위아래여백 조절해야함
`;

export const Title = styled.div`
  color: ${colors.b};
  font-size: 24px;
  font-weight: 600;
`;
