import React from "react";
import * as S from "./LoginPage.style";
import LogoMavve from "../../assets/LoginPage/LogoMavve.svg";
import LoginButtonImg from "../../assets/LoginPage/LoginButton.svg";

export default function LoginPage() {
  const handleLogin = () => {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

    const scopes = [
      "streaming",
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing"
    ];
    
    const scopeParam = scopes.join(" ");
    
    console.log("로그인 버튼 클릭됨");
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scopeParam)}&show_dialog=true`;
    
  };

  return (
    <S.Container>
      <S.LoginBox>
        <S.LogoMavve src={LogoMavve} alt="MAVVE 로고" />
        <S.Title>MAVVE에 로그인하기</S.Title>
        <S.LoginButton
          src={LoginButtonImg}
          alt="스포티파이 로그인"
          onClick={handleLogin}
        ></S.LoginButton>
      </S.LoginBox>
    </S.Container>
  );
}
