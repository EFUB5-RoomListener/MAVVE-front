// src/api/user.js
import axiosInstance from "./axiosInstance";

export const fetchUserInfo = async () => {
  const response = await axiosInstance.get("/auth/users/me");
  return response.data;
};

export const updateUserInfo = async ({ nickname, profile }) => {
  const response = await axiosInstance.patch("/auth/users/me", {
    nickname,
    profile,
  });
  return response.data;
};