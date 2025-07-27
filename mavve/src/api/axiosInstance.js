import axios from 'axios';

// axios 인스턴스 생성
// baseURL: 모든 API 요청의 기본 주소가 됨 
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
  });
  
  // 모든 요청을 보내기 전에 accessToken을 자동으로 붙여줌
  axiosInstance.interceptors.request.use((config) => {
    // localStorage에서 accessToken 꺼내기
    const token = localStorage.getItem('accessToken');

     // 토큰이 있으면 Authorization 헤더에 추가
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  export default axiosInstance;