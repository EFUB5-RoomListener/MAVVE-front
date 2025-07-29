import axiosInstance from "./axiosInstance";

export const uploadThumbnailImage = async (file, dirName) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("dirName", dirName);

  try {
    const response = await axiosInstance.post("/image/upload", formData);
    return response.data.imageUrl;
  } catch (error) {
    console.error("이미지 업로드 실패:", error);
    throw error;
  }
};

// 위랑 같은 코드인데 함수 이름만 달라요~!
// 이미지 업로드 기능 자체에 사용 가능한 것 같아서 아래 이름으로 만들었어요
// 나중에 위 함수 삭젲하고 아래거 써도 될 거 같아용
export const uploadImage = async (file, dirName) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("dirName", dirName);

  try {
    const response = await axiosInstance.post("/image/upload", formData);
    return response.data.imageUrl;
  } catch (error) {
    console.error("이미지 업로드 실패:", error);
    throw error;
  }
};

export const deleteImage = async (fileUrl) => {
  try {
    await axiosInstance.post("/image/delete", { fileUrl });
  } catch (error) {
    console.error("이미지 삭제 실패:", error);
    throw error;
  }
};
