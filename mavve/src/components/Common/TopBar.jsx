import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../Common/TopBar.style";
import logo from "../../assets/Common/logo.svg";
import search from "../../assets/Common/icn_search.svg";
import alert from "../../assets/Common/icn_bell.svg";
import Defaultprofile from "../../assets/Common/defaultProfile.svg";
import { useUserStore } from "../../store/useUserStore";
import { fetchUserInfo } from "../../api/user";

export default function TopBar() {
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();

  useEffect(() => {
    const fetchAndSetUser = async () => {
      try {
        const data = await fetchUserInfo();
        setUser(data);
      } catch (err) {
        console.error("TopBar에서 사용자 정보 가져오기 실패:", err);
      }
    };

    fetchAndSetUser();
  }, []);

  return (
    <S.TopBarContainer>
      <S.Contents>
        <S.Logo onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
        </S.Logo>
        <S.SearchBar>
          <img src={search} alt="search" />
          <input placeholder="함께 듣고 싶은 음악이 있나요? 원하는 방을 찾아보세요!" />
        </S.SearchBar>
        <S.Buttons>
          <S.AlertButton>
            <img src={alert} alt="alert" />
          </S.AlertButton>
          <S.ProfileButton>
            <img src={user.profile || Defaultprofile} alt="profile" />
          </S.ProfileButton>
        </S.Buttons>
      </S.Contents>
    </S.TopBarContainer>
  );
}
