import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../pages/MyPage/MyPage.style";
import WaveImg from "../../assets/MyPage/wave.svg";
import DefaultProfile from "../../assets/Common/defaultProfile.svg";
import EditIcon from "../../assets/MyPage/editIcon.svg";

export default function Profile({ user, onEditClick, myRoomCount }) {
  return (
    <S.ProfileContainer>
      <S.WaveImg src={WaveImg} alt="wave" />
      <S.ProfileContent>
        <S.ProfileImage
          src={user.profile || DefaultProfile}
          alt="프로필 이미지"
        />
        <S.ProfileTextContainer>
          <S.Nickname>{user.nickname}</S.Nickname>
          <S.InfoContainer>
            <S.UserCount>
              <S.UserText>내 플레이리스트 0개</S.UserText>
              <S.UserText>내 방 {myRoomCount}개</S.UserText>
            </S.UserCount>
            <S.EditIconBtn onClick={onEditClick}>
              <S.EditIcon src={EditIcon} alt="편집 아이콘" />
            </S.EditIconBtn>
          </S.InfoContainer>
        </S.ProfileTextContainer>
      </S.ProfileContent>
    </S.ProfileContainer>
  );
}
