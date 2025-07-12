import React from "react";
import { useState } from "react";
import RoomCreateForm from "./RoomCreateForm";
import CreateBtn from "../../assets/RoomPage/createpencil.svg";
import * as S from "./RoomPage.style";
import mockPlayLists from "./playlistMockData";

function RoomInfoHeader({ roomInfo, setRoomInfo, selectedLists }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

   // selectedLists는 id 배열이므로, 해당 id로 다시 플레이리스트 정보 찾기
   const selectedPlaylists = mockPlayLists.filter(p =>
    selectedLists.includes(p.id)
  );

  const totalPlaylists = selectedPlaylists.length;
  const totalSongs = selectedPlaylists.reduce(
    (acc, playlist) => acc + playlist.songCount, 0
  );


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
          <S.RoomTitle>{roomInfo.title || "방 제목"}</S.RoomTitle>
          {totalPlaylists > 0 &&
              <S.SubInfo>
               <div>플레이리스트 {totalPlaylists}개</div>
               <div>곡 {totalSongs}곡</div>
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

      {isModalOpen && (
       <S.ModalWrapper>
       <S.ModalContent>
         <RoomCreateForm
           roomInfo={roomInfo}
           setRoomInfo={setRoomInfo}
           onClose={() => setIsModalOpen(false)}
         />
       </S.ModalContent>
     </S.ModalWrapper>
      )}
    </S.HeaderContainer>
  );
}

export default RoomInfoHeader;
