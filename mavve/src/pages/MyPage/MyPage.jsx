import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./MyPage.style";
import WaveImg from "../../assets/MyPage/wave.svg";
import DefaultProfile from "../../assets/MyPage/defaultProfile.svg";
import EditIcon from "../../assets/MyPage/editIcon.svg";
import EditIconHover from "../../assets/MyPage/editIconHover.svg";
import ProfileTestImg from "../../assets/MyPage/profileTest.png";
import XIcon from "../../assets/MyPage/xIcon.svg";
import ImgUploadIcon from "../../assets/MyPage/imgUploadIcon.svg";
import OneLineNote from "../../components/Common/OneLineNote";
import RoomComponent from "../../components/Common/RoomComponent";
import SideBar from "../../components/Common/SideBar";
import TopBar from "../../components/Common/TopBar";

export default function MyPage() {
  const [user, setUser] = useState({
    name: "테스트유저",
    profileImg: ProfileTestImg, //기본 프로필 테스트 하려면 "" 으로 변경
    playlistCount: 5,
    roomCount: 10,
  });

  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState(user.name);

  const [myRooms, setMyRooms] = useState([
    {
      id: 1,
      title: "나만의 방1",
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
      liked: false,
      likes: 200,
    },
    {
      id: 5,
      title: "나만의 방1",
      tag: "신나는",
      duration: "01:24:34",
      liked: false,
      likes: 200,
    },
    {
      id: 6,
      title: "나만의 방1",
      tag: "신나는",
      duration: "01:24:34",
      liked: false,
      likes: 200,
    },
    {
      id: 7,
      title: "나만의 방1",
      tag: "신나는",
      duration: "01:24:34",
      liked: false,
      likes: 200,
    },
    {
      id: 8,
      title: "나만의 방1",
      tag: "신나는",
      duration: "01:24:34",
      liked: false,
      likes: 200,
    },
    {
      id: 9,
      title: "나만의 방1",
      tag: "신나는",
      duration: "01:24:34",
      liked: false,
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
          <S.ViewArea>
            <S.ProfileContainer>
              <S.WaveImg src={WaveImg} alt="wave" />
              <S.ProfileContent>
                <S.ProfileImage
                  src={user.profileImg || DefaultProfile}
                  alt="프로필 이미지"
                />
                <S.ProfileTextContainer>
                  <S.Nickname>{user.name}</S.Nickname>
                  <S.InfoContainer>
                    <S.UserCount>
                      <S.UserText>
                        내 플레이리스트 {user.playlistCount}개
                      </S.UserText>
                      <S.UserText>내 방 {user.roomCount}개</S.UserText>
                    </S.UserCount>
                    <S.EditIcon
                      src={isHovered ? EditIconHover : EditIcon}
                      alt="편집 아이콘"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      onClick={() => setIsEditing(true)}
                    />
                  </S.InfoContainer>
                </S.ProfileTextContainer>
              </S.ProfileContent>
            </S.ProfileContainer>

            {isEditing && (
              <S.ProfileEditBackground onClick={() => setIsEditing(false)}>
                <S.ProfileEditBox onClick={(e) => e.stopPropagation()}>
                  <S.ProfileEditHeader>
                    프로필 편집
                    <img
                      src={XIcon}
                      alt="닫기"
                      onClick={() => setIsEditing(false)}
                    />
                  </S.ProfileEditHeader>
                  <S.ProfileEditArea>
                    <S.ProfileImgContainer>
                      <S.ProfileImgEdit>
                        <label htmlFor="profileImgInput">
                          {user.profileImg ? (
                            <img src={user.profileImg} alt="프로필 이미지" />
                          ) : (
                            <img
                              src={ImgUploadIcon}
                              alt="업로드 아이콘"
                              style={{ width: "3rem", height: "3rem" }}
                            />
                          )}
                        </label>
                      </S.ProfileImgEdit>
                      <input
                        type="file"
                        id="profileImgInput"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleImgUplad}
                      />
                    </S.ProfileImgContainer>
                    <S.ProfileEditInputs>
                      이름
                      <input
                        type="text"
                        value={nameInput}
                        maxLength={10}
                        onChange={(e) => setNameInput(e.target.value)}
                      />
                      <S.SaveButton
                        onClick={() => {
                          setUser((prev) => ({ ...prev, name: nameInput }));
                          setIsEditing(false);
                        }}
                      >
                        저장하기
                      </S.SaveButton>
                    </S.ProfileEditInputs>
                  </S.ProfileEditArea>
                </S.ProfileEditBox>
              </S.ProfileEditBackground>
            )}

            <S.OneLineNoteContainer>
              <S.Title>오늘의 한 줄 일기</S.Title>
              <OneLineNote />
            </S.OneLineNoteContainer>
            <S.MyRoomArea>
              <S.Title
                onClick={() => {
                  if (myRooms.length >= 8) {
                    navigate("/mypage/myroom");
                  }
                }}
                style={{ cursor: myRooms.length >= 8 ? "pointer" : "default" }}
              >
                내가 만든 방
              </S.Title>
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
                        플레이리스트를 공유하고, 함께 감상하며 대화를
                        나눠보세요.
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
          </S.ViewArea>
        </S.Main>
      </S.MainContainer>
    </S.Container>
  );
}
