import axios from "axios";
import { reissueToken } from "./auth";

// axios 인스턴스 생성
// baseURL: 모든 API 요청의 기본 주소가 됨
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// 모든 요청을 보내기 전에 accessToken을 자동으로 붙여줌
axiosInstance.interceptors.request.use((config) => {
  // localStorage에서 accessToken 꺼내기
  const token = localStorage.getItem("accessToken");

  // 토큰이 있으면 Authorization 헤더에 추가
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // accessToken 만료로 인한 401 Unauthorized → 재발급 시도
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await reissueToken();

        // 새로운 토큰으로 원래 요청 재시도
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (reissueError) {
        // 재발급 실패 시 로그아웃
        localStorage.removeItem("accessToken");
        //alert("❗ 액세스 토큰 만료. 다시 로그인해 주세요.");
        //window.location.href = "/login"; // 로그인 페이지로 이동
        return Promise.reject(reissueError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
