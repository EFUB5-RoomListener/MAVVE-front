import axiosInstance from "./axiosInstance";

// 로그아웃
export const logout = async () => {
  return await axiosInstance.post("/auth/logout");
};
