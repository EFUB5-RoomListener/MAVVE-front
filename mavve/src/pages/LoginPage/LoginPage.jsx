import React from "react";
import * as S from "./LoginPage.style";
import LogoMavve from "../../assets/LoginPage/LogoMavve.svg";
import LoginButtonImg from "../../assets/LoginPage/LoginButton.svg";

export default function LoginPage() {
  const handleLogin = () => {
    console.log("로그인 버튼 클릭됨");
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
