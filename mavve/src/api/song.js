import axiosInstance from "./axiosInstance";

export const searchSongs = async (query, page = 0, size = 10) => {
  try {
    const response = await axiosInstance.get("/songs/search", {
      params: { query, page, size },
    });
    console.log("검색 결과 응답:", response.data);
    return response.data.songs;
  } catch (error) {
    console.error("노래 검색 실패:", error);
    throw error;
  }
};

//
