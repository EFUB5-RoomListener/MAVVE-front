import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Menu.style";
import IconLogin from "../../assets/Common/gnb_icn_login.svg";
import IconLogout from "../../assets/Common/gnb_icn_logout.svg";
import IconMypage from "../../assets/Common/gnb_icn_mypage.svg";
import IconPlaylist from "../../assets/Common/gnb_icn_playlist.svg";
import IconRoom from "../../assets/Common/gnb_icn_room.svg";
import { logout } from "../../api/auth";
import { useUserStore } from "../../store/useUserStore";

export default function Menu({
  isMenuOpen,
  setIsMenuOpen,
  user,
  menuRef,
  profileRef,
}) {
  const navigate = useNavigate();
  const { setUser } = useUserStore();

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

  const handleLogout = async () => {
    const confirmed = window.confirm("로그아웃 하시겠습니까?");
    if (!confirmed) return;

    try {
      await logout();
    } catch (err) {
      console.error("❌ 로그아웃 실패:", err);
    } finally {
      localStorage.removeItem("accessToken");
      setUser(null);
      alert("로그아웃이 완료되었습니다!");
      navigate("/");
    }
  };

  if (!isMenuOpen) return null;

  return (
    <S.MenuContainer ref={menuRef}>
      {user?.nickname ? (
        <>
          <S.MenuItem onClick={() => navigate("/mypage")}>
            <S.MenuIcon src={IconMypage} alt="mypage" />
            마이페이지
          </S.MenuItem>
          <S.MenuItem onClick={() => navigate("/playlist")}>
            <S.MenuIcon src={IconPlaylist} alt="playlist" />내 플레이리스트
          </S.MenuItem>
          <S.MenuItem onClick={() => navigate("/rooms")}>
            <S.MenuIcon src={IconRoom} alt="room" />방 만들기
          </S.MenuItem>
          <S.Divider />
          <S.MenuItem onClick={handleLogout}>
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
  );
}
