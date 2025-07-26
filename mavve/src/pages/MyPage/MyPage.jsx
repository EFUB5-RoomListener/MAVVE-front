import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./MyPage.style";
import ProfileTestImg from "../../assets/MyPage/profileTest.png";
import OneLineNote from "../../components/Common/OneLineNote";
import RoomComponent from "../../components/Common/RoomComponent";
import SideBar from "../../components/Common/SideBar";
import TopBar from "../../components/Common/TopBar";
import CreateRoomBtn from "../../assets/MyPage/createRoomBtn.svg";
import CreateRoomBtnHover from "../../assets/MyPage/createRoomBtnHover.svg";
import Profile from "./Profile";
import ProfileEditModal from "./ProfileEditModal";
import OneLineNoteModal from "../../pages/MyPage/OneLineNoteModal";

export default function MyPage() {
  const [user, setUser] = useState({
    name: "테스트유저",
    profileImg: "", //ProfileTestImg, //기본 프로필 테스트 하려면 "" 으로 변경
    playlistCount: 5,
    roomCount: 10,
  });

  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState(user.name);

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

  const [noteData, setNoteData] = useState({
    diaryId: 1,
    emojiUrl: "",
    nickname: "테스트 유저",
    comment: "",
    songTitle: "",
    songArtist: "",
    songImage: "",
    createdAt: "2022-11-20T08:02:21.347+0000",
    duration: "",
  });
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);

  const likedRooms = myRooms.filter((room) => room.liked);

  const myRoomRef = useRef(null);
  const likedRoomRef = useRef(null);

  const handleHorizontalScroll = (ref) => (e) => {
    if (ref.current) {
      ref.current.scrollLeft += e.deltaY;
    }
  };

  const handleImgUplad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setUser((prev) => ({ ...prev, profileImg: imgUrl }));
    }
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
          <Profile user={user} onEditClick={() => setIsEditing(true)} />
          {isEditing && (
            <ProfileEditModal
              user={user}
              nameInput={nameInput}
              setNameInput={setNameInput}
              setUser={setUser}
              onClose={() => setIsEditing(false)}
              onImageUpload={handleImgUplad}
            />
          )}

          <S.OneLineNoteContainer>
            <S.Title>오늘의 한 줄 일기</S.Title>
            <OneLineNote
              profileImg={user.profileImg}
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
            <S.MyRoomHeader>
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
              <S.CreateRoomBtn
                src={isHovered ? CreateRoomBtnHover : CreateRoomBtn}
                alt="방 만들기"
                onClick={() => navigate("/room")}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </S.MyRoomHeader>
            <S.MyRoomContainer
              ref={myRoomRef}
              onWheel={handleHorizontalScroll(myRoomRef)}
              style={{
                overflowX: myRooms.length >= 5 ? "auto" : "unset",
              }}
            >
              {myRooms.length > 0 ? (
                myRooms.map((room) => (
                  <RoomComponent key={room.id} data={room} />
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
                likedRooms.map((room) => (
                  <RoomComponent key={room.id} data={room} />
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
      </S.MainContainer>
    </S.Container>
  );
}
