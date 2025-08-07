import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./MyPage.style";
import ProfileTestImg from "../../assets/MyPage/profileTest.png";
import OneLineNote from "../../components/Common/OneLineNote";
import RoomComponent from "../../components/Common/RoomComponent";
import SideBar from "../../components/Common/SideBar";
import TopBar from "../../components/Common/TopBar";
import PlusIcon from "../../assets/MyPage/plusIcon.svg";
import MinusIcon from "../../assets/MyPage/MinusIcon.svg";
import Profile from "../../components/MyPage/Profile";
import ProfileEditModal from "../../components/MyPage/ProfileEditModal";
import OneLineNoteModal from "../../components/MyPage/OneLineNoteModal";
import RoomUpdateForm from "../../components/MyPage/RoomUpdateForm";
import RoomDeleteModal from "../../components/MyPage/RoomDeleteModal";
import { useUserStore } from "../../store/useUserStore";
import { useRoomStore } from "../../store/useRoomStore";
import { fetchUserInfo } from "../../api/user";
import { uploadImage } from "../../api/image";
import { fetchDiaryByUser, deleteDiary } from "../../api/diary";
import { getMyPlaylists } from "../../api/playlist";

export default function MyPage() {
  const { user, setUser, updateProfile } = useUserStore();
  const navigate = useNavigate();
  const [noteData, setNoteData] = useState({});
  const [nameInput, setNameInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [contextMenuTargetId, setContextMenuTargetId] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [roomData, setRoomData] = useState(null);
  const [playlistCount, setPlaylistCount] = useState(0);

  const {
    myRooms,
    likedRooms,
    fetchAndSetMyRooms,
    fetchAndSetLikedRooms,
    setMyRooms,
  } = useRoomStore();

  const handleEditClick = (roomData) => {
    setRoomData(roomData);
    setEditModalOpen(true);
  };

  const handleDeleteClick = (roomData) => {
    setRoomData(roomData);
    setIsDeleteModalOpen(true);
  };

  const prevNicknameRef = useRef("");
  const myRoomRef = useRef(null);
  const likedRoomRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetchUserInfo();
      setUser(data);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (user.nickname !== prevNicknameRef.current) {
      setNameInput(user.nickname);
      prevNicknameRef.current = user.nickname;
    }
  }, [user]);

  useEffect(() => {
    if (user.profile === null || user.profile === undefined) {
      setUser((prev) => ({ ...prev, profile: "" }));
    }
  }, [user.profile]);

  //한 줄 일기 조회
  useEffect(() => {
    const fetchDiary = async () => {
      try {
        const data = await fetchDiaryByUser();
        if (!data) {
          setNoteData({});
          return;
        }

        console.log("📒 불러온 일기 데이터:", data);

        setNoteData({
          diaryId: data.diaryId,
          emojiUrl: data.emojiUrl,
          nickname: data.nickname,
          comment: data.comment,
          songTitle: data.songTitle,
          songArtist: Array.isArray(data.songArtist)
            ? data.songArtist.join(", ")
            : data.songArtist,
          songImageUrl: data.songImageUrl,
          songDuration: data.songDuration,
          album: data.album,
          createdAt: data.createdAt,
        });
      } catch (error) {
        console.error("한 줄 일기 조회 실패:", error);
      }
    };
    fetchDiary();
  }, []);

  //내가 만든 방, 좋아요한 방 목록 가져오기
  useEffect(() => {
    fetchAndSetMyRooms();
    fetchAndSetLikedRooms();
  }, [location]);

  const handleHorizontalScroll = (ref) => (e) => {
    if (ref.current) {
      ref.current.scrollLeft += e.deltaY;
    }
  };

  const handleImgUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const imageUrl = await uploadImage(file, "profile");
      updateProfile(imageUrl);
    } catch (error) {
      console.error("이미지 업로드 중 오류:", error);
      alert("이미지 업로드에 실패했습니다.");
    }
  };

  const handleDeleteDiary = async () => {
    if (!noteData?.diaryId) return;

    const confirmDelete = window.confirm("한 줄 일기를 삭제하시겠습니까?");
    if (!confirmDelete) return;

    try {
      const success = await deleteDiary(noteData.diaryId);
      if (success) {
        alert("일기가 삭제되었습니다.");
        setNoteData({}); // 일기 데이터 초기화
      }
    } catch (error) {
      alert("일기 삭제에 실패했습니다.");
    }
  };

  //플레이리스트 개수 조회
  useEffect(() => {
    const fetchPlaylistCount = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) return;

        const playlists = await getMyPlaylists(accessToken);
        console.log("플리", playlists);
        setPlaylistCount(playlists.length);
      } catch (error) {
        console.error("플레이리스트 개수 조회 실패:", error);
      }
    };

    fetchPlaylistCount();
  }, []);

  return (
    <S.Container>
       <S.Wave />
        <TopBar />
        <S.Contents>
          <SideBar />
          <S.MainContents>
        <S.Main>
          <Profile
            user={user}
            onEditClick={() => setIsEditing(true)}
            myRoomCount={myRooms.length}
            playlistCount={playlistCount}
          />
          {isEditing && (
            <ProfileEditModal
              nameInput={nameInput}
              setNameInput={setNameInput}
              onClose={() => setIsEditing(false)}
              onImageUpload={handleImgUpload}
            />
          )}

          <S.OneLineNoteContainer>
            <S.TitleContainer>
              <S.Title>오늘의 한 줄 일기</S.Title>
              {noteData?.comment && (
                <S.DeleteDiaryBtn onClick={handleDeleteDiary}>
                  <S.BtnIcon src={MinusIcon} alt="한 줄 일기 삭제 아이콘" />한
                  줄 일기 삭제하기
                </S.DeleteDiaryBtn>
              )}
            </S.TitleContainer>
            <OneLineNote
              profileImg={user.profile}
              noteData={noteData}
              onEditClick={() => setIsNoteModalOpen(true)}
            />
          </S.OneLineNoteContainer>
          {isNoteModalOpen && (
            <OneLineNoteModal
              onClose={() => setIsNoteModalOpen(false)}
              noteData={noteData}
              setNoteData={setNoteData}
            />
          )}

          <S.MyRoomArea>
            <S.TitleContainer>
              <S.Title
                onClick={() => {
                  if (myRooms.length >= 8) {
                    navigate("/mypage/myroom");
                  }
                }}
                style={{
                  cursor: myRooms.length >= 8 ? "pointer" : "default",
                }}
              >
                내가 만든 방
              </S.Title>
              <S.CreateRoomBtn onClick={() => navigate("/rooms")}>
                <S.BtnIcon src={PlusIcon} alt="방 생성 아이콘" />방 생성하기
              </S.CreateRoomBtn>
            </S.TitleContainer>
            <S.MyRoomContainer
              ref={myRoomRef}
              onWheel={handleHorizontalScroll(myRoomRef)}
              style={{
                overflowX: myRooms.length >= 5 ? "auto" : "unset",
              }}
            >
              {myRooms.length > 0 ? (
                myRooms.slice(0, 8).map((room) => (
                  <RoomComponent
                    key={room.roomId}
                    data={room}
                    isMyRoom={true}
                    contextMenuTargetId={contextMenuTargetId}
                    setContextMenuTargetId={setContextMenuTargetId}
                    onEditClick={handleEditClick}
                    onDeleteClick={handleDeleteClick}
                    onLikeToggle={async (updated) => {
                      setMyRooms((prev) =>
                        prev.map((r) =>
                          r.roomId === updated.roomId ? { ...r, ...updated } : r
                        )
                      );

                      try {
                        await fetchAndSetLikedRooms();
                      } catch (error) {
                        console.error("좋아요 목록 새로고침 실패:", error);
                      }
                    }}
                  />
                ))
              ) : (
                <>
                  <S.NoticeContainer>
                    <S.NoticeLarge>아직 내가 만든 방이 없어요!</S.NoticeLarge>
                    <S.NoticeSmall>
                      지금 바로 나만의 음악 방을 만들어 친구들과 함께
                      플레이리스트를 공유하고, 함께 감상하며 대화를 나눠보세요.
                    </S.NoticeSmall>
                  </S.NoticeContainer>
                </>
              )}
            </S.MyRoomContainer>
          </S.MyRoomArea>

          <S.LikedRoomArea>
            <S.Title
              onClick={() => {
                if (likedRooms.length >= 8) {
                  navigate("/mypage/likedroom");
                }
              }}
              style={{
                cursor: likedRooms.length >= 8 ? "pointer" : "default",
              }}
            >
              내가 좋아하는 방
            </S.Title>
            <S.LikedRoomContainer
              ref={likedRoomRef}
              onWheel={handleHorizontalScroll(likedRoomRef)}
              style={{ overflowX: likedRooms.length >= 5 ? "auto" : "unset" }}
            >
              {likedRooms.length > 0 ? (
                likedRooms.slice(0, 8).map((room) => (
                  <RoomComponent
                    key={room.roomId}
                    data={room}
                    isMyRoom={false}
                    onLikeToggle={async () => {
                      try {
                        await fetchAndSetLikedRooms();
                        await fetchAndSetMyRooms();
                      } catch (error) {
                        console.error("좋아요 목록 새로고침 실패:", error);
                      }
                    }}
                  />
                ))
              ) : (
                <>
                  <S.NoticeContainer>
                    <S.NoticeLarge>아직 좋아요한 방이 없어요!</S.NoticeLarge>
                    <S.NoticeSmall>
                      마음에 드는 방에 좋아요를 눌러 나만의 컬렉션을
                      만들어보세요.
                    </S.NoticeSmall>
                  </S.NoticeContainer>
                </>
              )}
            </S.LikedRoomContainer>
          </S.LikedRoomArea>
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
              await fetchAndSetLikedRooms();
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
              await fetchAndSetLikedRooms();
            }}
          />
        )}
      </S.MainContents>
  </S.Contents>
</S.Container>
  );
}
