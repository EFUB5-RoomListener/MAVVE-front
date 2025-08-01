import axiosInstance from "./axiosInstance";

//한 줄 일기 생성하기
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

//한 줄 일기 개별 조회하기 (마이페이지)
export const fetchDiaryByUser = async () => {
  const response = await axiosInstance.get("/diaries/user");
  return response.data;
};

//한 줄 일기 수정하기(마이페이지)
export const updateDiary = async (
  diaryId,
  { emojiId, spotifySongId, comment }
) => {
  try {
    const response = await axiosInstance.patch(`/diaries/${diaryId}`, {
      emojiId,
      spotifySongId,
      comment,
    });
    return response.data;
  } catch (error) {
    console.error("일기 수정 실패:", error);
    throw error;
  }
};

//한 줄 일기 삭제하기
export const deleteDiary = async (diaryId) => {
  try {
    const response = await axiosInstance.delete(`/diaries/${diaryId}`);
    return response.status === 204;
  } catch (error) {
    console.error("일기 삭제 실패:", error);
    throw error;
  }
};

//한 줄 일기 6개 조회하기 (메인페이지)
export const getDiaries = async () => {
  const response = await axiosInstance.get("/diaries");
  return response.data;
};
