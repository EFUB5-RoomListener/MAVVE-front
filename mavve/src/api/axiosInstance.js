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

let isRefreshing = false;
let refreshPromise = null;

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/reissue")
    ) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;
        refreshPromise = reissueToken()
          .then((newToken) => {
            isRefreshing = false;
            return newToken;
          })
          .catch((err) => {
            isRefreshing = false;
            throw err;
          });
      }

      try {
        const newAccessToken = await refreshPromise;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (reissueError) {
        localStorage.removeItem("accessToken");
        return Promise.reject(reissueError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
