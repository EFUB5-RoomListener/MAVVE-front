import React, { useState } from "react";
import * as S from "./MyPage.style";
import WaveImg from "../../assets/MyPage/wave.svg";
import DefaultProfile from "../../assets/MyPage/defaultProfile.svg";
import EditIcon from "../../assets/MyPage/editIcon.svg";
import EditIconHover from "../../assets/MyPage/editIconHover.svg";
import ProfileTestImg from "../../assets/MyPage/profileTest.png";
export default function MyPage() {
  const [isHovered, setIsHovered] = useState(false);

  const user = {
    name: "테스트유저",
    profileImg: ProfileTestImg, //기본 프로필 테스트 하려면 "" 으로 변경
    playlistCount: 100,
    roomCount: 1,
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
                    />
                  </S.InfoContainer>
                </S.ProfileTextContainer>
              </S.ProfileContent>
            </S.ProfileContainer>
            <S.DiaryArea>
              <S.Title>오늘의 한 줄 일기</S.Title>
            </S.DiaryArea>
            <S.MyRoomArea>
              <S.Title>내가 만든 방</S.Title>
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
