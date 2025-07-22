import React, { useState } from "react";
import * as S from "./MyPage.style";
import TopBar from "../../components/Common/TopBar";
import SideBar from "../../components/Common/SideBar";
import RoomComponent from "../../components/Common/RoomComponent";

export default function LikedRoomPage() {
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
  ]);

  const likedRooms = myRooms.filter((room) => room.liked);

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
            <S.Title>내가 좋아하는 방</S.Title>
          </S.PageHeader>
          <S.PageRoomContainer>
            {likedRooms.map((room) => (
              <RoomComponent key={room.id} data={room} />
            ))}
          </S.PageRoomContainer>
        </S.Main>
      </S.MainContainer>
    </S.Container>
  );
}
