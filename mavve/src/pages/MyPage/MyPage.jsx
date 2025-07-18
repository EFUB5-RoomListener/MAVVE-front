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

export default function MyPage() {
  const [user, setUser] = useState({
    name: "테스트유저",
    profileImg: ProfileTestImg, //기본 프로필 테스트 하려면 "" 으로 변경
    playlistCount: 100,
    roomCount: 1,
  });

  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState(user.name);

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleImgUplad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setUser((prev) => ({ ...prev, profileImg: imgUrl }));
    }
  };

  return (
    <S.Container>
      <S.Header></S.Header>
      <S.MainContainer>
        <S.Sidebar />
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

            <S.DiaryArea>
              <S.Title>오늘의 한 줄 일기</S.Title>
            </S.DiaryArea>
            <S.MyRoomArea>
              <S.Title onClick={() => navigate("/mypage/myroom")}>
                내가 만든 방
              </S.Title>
            </S.MyRoomArea>
            <S.LikedRoomArea>
              <S.Title>내가 좋아하는 방</S.Title>
            </S.LikedRoomArea>
          </S.ViewArea>
        </S.Main>
      </S.MainContainer>
    </S.Container>
  );
}
