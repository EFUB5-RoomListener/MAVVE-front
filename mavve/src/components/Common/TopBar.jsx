import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../Common/TopBar.style";
import logo from "../../assets/Common/logo.svg";
import alert from "../../assets/Common/icn_bell.svg";
import alertHover from "../../assets/Common/icn_bell_hover.svg";
import alertClick from "../../assets/Common/icn_bell_click.svg";
import Defaultprofile from "../../assets/Common/defaultProfile.svg";
import Menu from "../Common/Menu";
import Alarm from "./Alarm";
import RoomSearch from "./RoomSearch";
import { useUserStore } from "../../store/useUserStore";
import { fetchUserInfo } from "../../api/user";

export default function TopBar() {
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAlarmOpen, setIsAlarmOpen] = useState(false);
  const alertRef = useRef(null);
  const menuRef = useRef(null);
  const profileRef = useRef(null);
  const [alertIcon, setAlertIcon] = useState(alert);

  const handleMouseEnter = () => setAlertIcon(alertHover);
  const handleMouseLeave = () => setAlertIcon(alert);
  const handleMouseDown = () => setAlertIcon(alertClick);
  const handleMouseUp = () => setAlertIcon(alertHover);

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

  const handleAlertClick = () => {
    setIsAlarmOpen((prev) => !prev);
    setIsMenuOpen(false); // 메뉴와 알림창은 동시에 열리지 않게
  };

  const handleProfileClick = () => {
    setIsMenuOpen((prev) => !prev);
    setIsAlarmOpen(false);
  };

  return (
    <S.TopBarContainer>
      <S.Contents>
        <S.Logo onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
        </S.Logo>
        <RoomSearch />

        <S.Buttons>
          <S.AlertButton
            ref={alertRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={handleAlertClick}
          >
            <img src={alertIcon} alt="alert" />
          </S.AlertButton>
          <Alarm
            isAlarmOpen={isAlarmOpen}
            setIsAlarmOpen={setIsAlarmOpen}
            alertRef={alertRef}
          />
          <S.ProfileButton onClick={handleProfileClick} ref={profileRef}>
            <img src={user.profile || Defaultprofile} alt="profile" />
          </S.ProfileButton>
          <Menu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            user={user}
            menuRef={menuRef}
            profileRef={profileRef}
          />
        </S.Buttons>
      </S.Contents>
    </S.TopBarContainer>
  );
}
