import axiosInstance from "./axiosInstance";
import axios from "axios";

// 로그아웃
export const logout = async () => {
  return await axiosInstance.post("/auth/logout");
};

//토큰 재발급(리이슈)
export const reissueToken = async () => {
  console.log("🔁 reissueToken() 호출됨");
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  try {
    const response = await axios.post(
      `${apiBaseUrl}/auth/reissue`,
      {},
      {
        withCredentials: true, // 쿠키 기반 리프레시 토큰 전달
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // 응답 헤더에서 새로운 accessToken 추출
    const rawAuth = response.headers["authorization"];
    const newAccessToken = rawAuth?.startsWith("Bearer ") && rawAuth.slice(7);

    if (newAccessToken) {
      localStorage.setItem("accessToken", newAccessToken);
      return newAccessToken;
    }

    throw new Error("accessToken이 응답에 없습니다.");
  } catch (error) {
    console.error("🔁 토큰 재발급 실패:", error);
    throw error;
  }
};
