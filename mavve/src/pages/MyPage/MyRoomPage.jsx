import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./MyPage.style";
import TopBar from "../../components/Common/TopBar";
import SideBar from "../../components/Common/SideBar";
import RoomComponent from "../../components/Common/RoomComponent";
import PlusIcon from "../../assets/MyPage/plusIcon.svg";

import { fetchMyRooms } from "../../api/room";

export default function MyPage() {
  const navigate = useNavigate();
  const [myRooms, setMyRooms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getMyRooms = async () => {
      try {
        const roomList = await fetchMyRooms();

        setMyRooms(Array.isArray(roomList) ? roomList : []);
      } catch (error) {
        console.error("내가 만든 방 목록을 불러오는 데 실패했습니다:", error);
        setMyRooms([]);
      }
    };
    getMyRooms();
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
              <RoomComponent key={room.roomId} data={room} />
            ))}
          </S.PageRoomContainer>
        </S.Main>
      </S.MainContainer>
    </S.Container>
  );
}
