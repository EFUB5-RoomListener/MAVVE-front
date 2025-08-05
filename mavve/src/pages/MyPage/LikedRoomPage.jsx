import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./MyPage.style";
import TopBar from "../../components/Common/TopBar";
import SideBar from "../../components/Common/SideBar";
import RoomComponent from "../../components/Common/RoomComponent";

export default function LikedRoomPage() {
  const location = useLocation();
  const { likedRooms, fetchAndSetLikedRooms } = useRoomStore();

  useEffect(() => {
    fetchAndSetLikedRooms();
  }, [location]);

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
              <RoomComponent
                key={room.roomId}
                data={room}
                onLikeToggle={fetchAndSetLikedRooms}
              />
            ))}
          </S.PageRoomContainer>
        </S.Main>
      </S.MainContainer>
    </S.Container>
  );
}
