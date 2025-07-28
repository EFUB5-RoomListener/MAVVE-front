import axiosInstance from "./axiosInstance";

export const createDiary = async ({ emojiId, spotifySongId, comment }) => {
  try {
    const response = await axiosInstance.post("/diaries", {
      emojiId,
      spotifySongId,
      comment,
    });
    return response.data;
  } catch (error) {
    console.error("일기 생성 실패:", error);
    throw error;
  }
};
