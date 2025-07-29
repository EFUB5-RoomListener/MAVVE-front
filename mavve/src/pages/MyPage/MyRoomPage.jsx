import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./MyPage.style";
import TopBar from "../../components/Common/TopBar";
import SideBar from "../../components/Common/SideBar";
import RoomComponent from "../../components/Common/RoomComponent";
import PlusIcon from "../../assets/MyPage/plusIcon.svg";
export default function MyPage() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  //개발 테스트용, 추후 API 연결 시 삭제
  const [myRooms, setMyRooms] = useState([
    {
      id: 1,
      title: "1번 방",
      tag: "신나는",
      duration: "01:24:34",
      liked: false,
      likes: 200,
    },
    {
      id: 2,
      title: "222",
      tag: "차분한",
      duration: "00:00:10",
      liked: true,
      likes: 2,
    },
    {
      id: 3,
      title: "333",
      tag: "신나는",
      duration: "01:24:34",
      liked: true,
      likes: 200,
    },
    {
      id: 4,
      title: "나만의 방1",
      tag: "신나는",
      duration: "01:24:34",
      liked: true,
      likes: 200,
    },
    {
      id: 5,
      title: "나만의 방1",
      tag: "신나는",
      duration: "01:24:34",
      liked: true,
      likes: 200,
    },
    {
      id: 6,
      title: "나만의 방1",
      tag: "신나는",
      duration: "01:24:34",
      liked: true,
      likes: 200,
    },
    {
      id: 7,
      title: "나만의 방1",
      tag: "신나는",
      duration: "01:24:34",
      liked: true,
      likes: 200,
    },
    {
      id: 8,
      title: "나만의 방1",
      tag: "신나는",
      duration: "01:24:34",
      liked: true,
      likes: 200,
    },
    {
      id: 9,
      title: "나만의 방1",
      tag: "신나는",
      duration: "01:24:34",
      liked: true,
      likes: 200,
    },
    {
      id: 10,
      title: "나만의 방1",
      tag: "신나는",
      duration: "01:24:34",
      liked: false,
      likes: 200,
    },
    {
      id: 11,
      title: "나만의 방1",
      tag: "신나는",
      duration: "01:24:34",
      liked: false,
      likes: 200,
    },
    {
      id: 12,
      title: "나만의 방1",
      tag: "신나는",
      duration: "01:24:34",
      liked: false,
      likes: 200,
    },
    {
      id: 13,
      title: "나만의 방1",
      tag: "신나는",
      duration: "01:24:34",
      liked: false,
      likes: 200,
    },
    //이 페이지에서만 임시 추가
    {
      id: 13,
      title: "나만의 방1",
      tag: "신나는",
      duration: "01:24:34",
      liked: false,
      likes: 200,
    },
    {
      id: 13,
      title: "나만의 방1",
      tag: "신나는",
      duration: "01:24:34",
      liked: false,
      likes: 200,
    },
    {
      id: 13,
      title: "나만의 방1",
      tag: "신나는",
      duration: "01:24:34",
      liked: false,
      likes: 200,
    },
  ]);

  return (
    <S.Container>
      <S.TopBarContainer>
        <TopBar />
      </S.TopBarContainer>
      <S.MainContainer>
        <S.SidebarContainer>
          <SideBar />
        </S.SidebarContainer>
        <S.Main>
          <S.PageHeader>
            <S.Title>내가 만든 방</S.Title>
            <S.CreateRoomBtn onClick={() => navigate("/room")}>
              <S.PlusIcon src={PlusIcon} alt="방 생성 아이콘" />방 생성하기
            </S.CreateRoomBtn>
          </S.PageHeader>
          <S.PageRoomContainer>
            {myRooms.map((room) => (
              <RoomComponent key={room.id} data={room} />
            ))}
          </S.PageRoomContainer>
        </S.Main>
      </S.MainContainer>
    </S.Container>
  );
}

//
