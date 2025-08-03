import axiosInstance from "./axiosInstance";

// 로그인
export const login = async (code) => {
  const res = await axiosInstance.post(
    "/auth/login",
    { code },
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      validateStatus: () => true,
      responseType: "text",
    }
  );
  return res;
};

// 로그아웃
export const logout = async () => {
  return await axiosInstance.post("/auth/logout");
};
