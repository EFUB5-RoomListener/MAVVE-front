import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./MyPage.style";
import TopBar from "../../components/Common/TopBar";
import SideBar from "../../components/Common/SideBar";
import RoomComponent from "../../components/Common/RoomComponent";

import { fetchLikedRooms } from "../../api/room";

export default function LikedRoomPage() {
  const [likedRooms, setLikedRooms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getLikedRooms = async () => {
      try {
        const data = await fetchLikedRooms();
        console.log("💖 좋아요한 방 목록 불러오기 완료:", data);
        setLikedRooms(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("좋아요한 방 목록을 불러오는 데 실패했습니다:", error);
        setLikedRooms([]);
      }
    };

    getLikedRooms();
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
                onLikeToggle={async () => {
                  try {
                    const refreshed = await fetchLikedRooms(); // roomList 배열이 반환됨
                    setLikedRooms(Array.isArray(refreshed) ? refreshed : []);
                  } catch (error) {
                    console.error("좋아요 목록 새로고침 실패:", error);
                  }
                }}
              />
            ))}
          </S.PageRoomContainer>
        </S.Main>
      </S.MainContainer>
    </S.Container>
  );
}
