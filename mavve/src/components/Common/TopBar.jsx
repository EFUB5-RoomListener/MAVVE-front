import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../Common/TopBar.style";
import logo from "../../assets/Common/logo.svg";
import search from "../../assets/Common/icn_search.svg";
import alert from "../../assets/Common/icn_bell.svg";
import Defaultprofile from "../../assets/Common/defaultProfile.svg";
import IconLogin from "../../assets/Common/gnb_icn_login.svg";
import IconLogout from "../../assets/Common/gnb_icn_logout.svg";
import IconMypage from "../../assets/Common/gnb_icn_mypage.svg";
import IconPlaylist from "../../assets/Common/gnb_icn_playlist.svg";
import IconRoom from "../../assets/Common/gnb_icn_room.svg";
import { useUserStore } from "../../store/useUserStore";
import { fetchUserInfo } from "../../api/user";

export default function TopBar() {
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const profileRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

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

  //메뉴 바깥쪽 클릭 시 메뉴 창 닫힘
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

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
          <S.ProfileButton onClick={toggleMenu} ref={profileRef}>
            <img src={user.profile || Defaultprofile} alt="profile" />
          </S.ProfileButton>
          {isMenuOpen && (
            <S.MenuContainer ref={menuRef}>
              {user?.nickname ? (
                <>
                  <S.MenuItem onClick={() => navigate("/mypage")}>
                    <S.MenuIcon src={IconMypage} alt="mypage" />
                    마이페이지
                  </S.MenuItem>
                  <S.MenuItem onClick={() => navigate("/playlist")}>
                    <S.MenuIcon src={IconPlaylist} alt="playlist" />내
                    플레이리스트
                  </S.MenuItem>
                  <S.MenuItem onClick={() => navigate("/rooms")}>
                    <S.MenuIcon src={IconRoom} alt="room" />방 만들기
                  </S.MenuItem>
                  <S.Divider />
                  <S.MenuItem>
                    <S.MenuIcon src={IconLogout} alt="logout" />
                    로그아웃
                  </S.MenuItem>
                </>
              ) : (
                <>
                  <S.MenuItem onClick={() => navigate("/login")}>
                    <S.MenuIcon src={IconLogin} alt="login" />
                    로그인
                  </S.MenuItem>
                </>
              )}
            </S.MenuContainer>
          )}
        </S.Buttons>
      </S.Contents>
    </S.TopBarContainer>
  );
}
