import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./MyPage.style";
import TopBar from "../../components/Common/TopBar";
import SideBar from "../../components/Common/SideBar";
import RoomComponent from "../../components/Common/RoomComponent";
import { useRoomStore } from "../../store/useRoomStore";

export default function LikedRoomPage() {
  const location = useLocation();
  const { likedRooms, fetchAndSetLikedRooms } = useRoomStore();

  useEffect(() => {
    fetchAndSetLikedRooms();
  }, [location.pathname]);

  return (
    <S.Container>
      <S.Wave />
      <TopBar />
      <S.Contents>
        <SideBar />
        <S.MainContents>
          <S.Main>
            <S.PageHeader>
              <S.Title>내가 좋아하는 방</S.Title>
            </S.PageHeader>

            <S.PageRoomContainer>
              {likedRooms.map((room) => (
                <RoomComponent
                  key={room.roomId}
                  data={room}
                  isMyRoom={false}
                  onLikeToggle={async () => {
                    try {
                      await fetchAndSetLikedRooms();
                    } catch (e) {
                      console.error("좋아요 목록 새로고침 실패:", e);
                    }
                  }}
                />
              ))}
            </S.PageRoomContainer>
          </S.Main>
        </S.MainContents>
      </S.Contents>
    </S.Container>
  );
}
