import React from "react";
import * as S from "./LoginPage.style";
import LogoMavve from "../../assets/LoginPage/LogoMavve.svg";
import LogoKakao from "../../assets/LoginPage/LogoKakao.svg";

export default function LoginPage() {
  const handleLogin = () => {
    console.log("로그인 버튼 클릭됨");
  };

  return (
    <S.Container>
      <S.LoginBox>
        <S.LogoMavve src={LogoMavve} alt="MAVVE 로고" />
        <S.Title>MAVVE에 로그인하기</S.Title>
        <S.LoginButton onClick={handleLogin}>
          <S.LogoKakao src={LogoKakao} alt="카카오톡 로고" />
          카카오톡으로 로그인하기
        </S.LoginButton>
      </S.LoginBox>
    </S.Container>
  );
}
