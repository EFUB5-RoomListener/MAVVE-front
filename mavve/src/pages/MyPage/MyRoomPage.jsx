import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./MyPage.style";
import TopBar from "../../components/Common/TopBar";
import SideBar from "../../components/Common/SideBar";
import RoomComponent from "../../components/Common/RoomComponent";
import PlusIcon from "../../assets/MyPage/plusIcon.svg";
import { useRoomStore } from "../../store/useRoomStore";

export default function MyRoomPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { myRooms, fetchAndSetMyRooms, setMyRooms } = useRoomStore();

  useEffect(() => {
    fetchAndSetMyRooms();
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
            <S.Title>내가 만든 방</S.Title>
            <S.CreateRoomBtn onClick={() => navigate("/rooms")}>
              <S.BtnIcon src={PlusIcon} alt="방 생성 아이콘" />방 생성하기
            </S.CreateRoomBtn>
          </S.PageHeader>
          <S.PageRoomContainer>
            {myRooms.map((room) => (
              <RoomComponent
                key={room.roomId}
                data={room}
                onLikeToggle={(updated) => {
                  setMyRooms((prev) =>
                    prev.map((r) =>
                      r.roomId === updated.roomId ? { ...r, ...updated } : r
                    )
                  );
                }}
              />
            ))}
          </S.PageRoomContainer>
        </S.Main>
      </S.MainContainer>
    </S.Container>
  );
}

//
