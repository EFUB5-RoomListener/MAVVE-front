import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./MyPage.style";
import WaveImg from "../../assets/MyPage/wave.svg";
import DefaultProfile from "../../assets/MyPage/defaultProfile.svg";
import EditIcon from "../../assets/MyPage/editIcon.svg";
import EditIconHover from "../../assets/MyPage/editIconHover.svg";

export default function Profile({ user, onEditClick }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
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
              <S.UserText>내 플레이리스트 {user.playlistCount}개</S.UserText>
              <S.UserText>내 방 {user.roomCount}개</S.UserText>
            </S.UserCount>
            <S.EditIcon
              src={isHovered ? EditIconHover : EditIcon}
              alt="편집 아이콘"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={onEditClick}
            />
          </S.InfoContainer>
        </S.ProfileTextContainer>
      </S.ProfileContent>
    </S.ProfileContainer>
  );
}
