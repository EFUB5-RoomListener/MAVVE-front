import React from "react";
import { useState } from "react";
import RoomCreateForm from "./RoomCreateForm";
import CreateBtn from "../../assets/RoomPage/createpencil.svg";
import * as S from "../../pages/RoomPage/RoomPage.style.js";
import RoomDeleteModal from './RoomDeleteModal.jsx';
import { useNavigate, useParams } from "react-router-dom";

function RoomInfoHeader({ roomInfo, setRoomInfo, step, setThumbnailFile, playlists, setPlaylists }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 방 삭제 모달
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // 방 입장
  const { roomCode } = useParams();
  const navigate = useNavigate();
  const handleEnter = (roomCode) => {
    localStorage.setItem("fromEnterBtn", "true");
    navigate(`/rooms/${roomCode}/inside`, {
      state: { fromEnterBtn: true }
    });  
  }

  // 총 곡수 계산
  const totalSongsNum = playlists.reduce((acc, playlist) => {
    return acc + (playlist.songs ? playlist.songs.length : 0);
  }, 0);

  return (
    <S.HeaderContainer>
      <S.HeaderThumbnail>
        {roomInfo.thumbnailPreview ? (
          <img src={roomInfo.thumbnailPreview} alt="썸네일" />
        ) : (
          <S.EmptyThumbnail />
        )}
      </S.HeaderThumbnail>

      <S.HeaderTextArea>
        <S.VisibilityText>{roomInfo.visibility}</S.VisibilityText>
        <S.TitleArea>
          <S.RoomTitle>{roomInfo.title
                          ? roomInfo.title.length > 8
                            ? `${roomInfo.title.slice(0, 8)}...`
                            : roomInfo.title
                          : "방 제목"}</S.RoomTitle>
          {step === "done" &&
              <S.SubInfo>
               <div>플레이리스트 {playlists.length}개</div>
               <div>곡 {totalSongsNum}곡</div>
              </S.SubInfo>
            }
          <S.EditButton onClick={() => setIsModalOpen(true)}>
            <img src={CreateBtn}/>
          </S.EditButton>
        </S.TitleArea>
        <S.HashtagContainer>
          {roomInfo.hashtags && roomInfo.hashtags.length > 0 ? (
            roomInfo.hashtags.map((tag, index) => (
              <S.Hashtag key={index}>#{tag}</S.Hashtag>
            ))
          ) : (
            <S.Hashtag>#해시태그</S.Hashtag>
          )}
        </S.HashtagContainer>
      </S.HeaderTextArea>
      
    
      {roomCode &&
          <S.RoomEnterBtn onClick={() => handleEnter(roomCode)}>
            방 입장하기
          </S.RoomEnterBtn>
      }

      {roomCode  &&
          <S.RoomDeleteBtn onClick={() => setIsDeleteModalOpen(true)}>
            방 삭제하기
          </S.RoomDeleteBtn>
      }
      

      {isModalOpen && (
       <S.ModalWrapper>
       <S.ModalContent>
         <RoomCreateForm
           roomInfo={roomInfo}
           setRoomInfo={setRoomInfo}
           onClose={() => setIsModalOpen(false)}
           setThumbnailFile={setThumbnailFile}
           step={step}
         />
       </S.ModalContent>
     </S.ModalWrapper>
      )}
      

      {step === "done" &&
      isDeleteModalOpen &&
        <RoomDeleteModal 
        onClose={() => setIsDeleteModalOpen(false)}
        roomTitle={roomInfo.title}
        />
      }
    </S.HeaderContainer>
  );
}

export default RoomInfoHeader;
