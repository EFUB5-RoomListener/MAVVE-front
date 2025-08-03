import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./LoginPage.style";
import Loading from "../../assets/LoginPage/loading.png";
import axios from "axios";

export default function LoginLoad() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("로그인 중...");

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    if (!code) {
      setMessage("❌ URL에 인증 코드가 없습니다.");
      return;
    }

    setMessage("✅ 인증 코드 수신 → 백엔드에 전송 중...");

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

    axios({
      method: "post",
      url: `${apiBaseUrl}/auth/login`,
      data: JSON.stringify({ code }),
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      validateStatus: () => true,
      responseType: "text",
    })
      .then((res) => {
        console.log("✅ 응답 상태 코드:", res.status);
        console.log("✅ 응답 헤더:", res.headers);

        const rawAuth = res.headers["authorization"];
        const token = rawAuth?.startsWith("Bearer ") ? rawAuth.slice(7) : null;

        if (res.status === 200 && token) {
          localStorage.setItem("accessToken", token);
          setMessage("✅ 로그인 성공! 잠시후 메인 화면으로 이동합니다...");
          setTimeout(() => navigate("/"), 1000);
        } else {
          setMessage(`❌ 로그인 실패: 상태 코드 ${res.status}, 토큰: ${token}`);
        }
      })
      .catch((err) => {
        console.error("❌ 요청 실패:", err);
        setMessage("서버 요청 중 에러가 발생했습니다.");
      });
  }, [navigate]);

  return (
    <S.LoadBackground>
      <S.LoadingIcon src={Loading} alt="로딩 중" />
      <h2>로그인 처리 중...</h2>
      <p>{message}</p>
    </S.LoadBackground>
  );
}
