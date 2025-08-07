import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./MyPage.style";
import TopBar from "../../components/Common/TopBar";
import SideBar from "../../components/Common/SideBar";
import RoomComponent from "../../components/Common/RoomComponent";
import PlusIcon from "../../assets/MyPage/plusIcon.svg";
import RoomUpdateForm from "../../components/MyPage/RoomUpdateForm";
import RoomDeleteModal from "../../components/MyPage/RoomDeleteModal";
import { useRoomStore } from "../../store/useRoomStore";

export default function MyRoomPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { myRooms, fetchAndSetMyRooms, setMyRooms } = useRoomStore();
  const [contextMenuTargetId, setContextMenuTargetId] = useState(null);
  const [roomData, setRoomData] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    fetchAndSetMyRooms();
  }, [location]);

  const handleEditClick = (room) => {
    setRoomData(room);
    setEditModalOpen(true);
  };

  const handleDeleteClick = (room) => {
    setRoomData(room);
    setIsDeleteModalOpen(true);
  };

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
                isMyRoom={true}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
                contextMenuTargetId={contextMenuTargetId}
                setContextMenuTargetId={setContextMenuTargetId}
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
        {editModalOpen && roomData && (
          <RoomUpdateForm
            roomInfo={{
              title: roomData.roomName,
              thumbnailPreview: roomData.imageURL,
              hashtags: roomData.tag || [],
              visibility: roomData.public,
            }}
            roomCode={roomData.roomId}
            onClose={() => setEditModalOpen(false)}
            onSuccess={async () => {
              await fetchAndSetMyRooms();
            }}
            step="done"
            setRoomInfo={() => {}}
            setThumbnailFile={() => {}}
          />
        )}

        {isDeleteModalOpen && roomData && (
          <RoomDeleteModal
            roomTitle={roomData.roomName}
            roomCode={roomData.roomId}
            onClose={() => setIsDeleteModalOpen(false)}
            onSuccess={async () => {
              await fetchAndSetMyRooms();
            }}
          />
        )}
      </S.MainContainer>
    </S.Container>
  );
}

//
