import axiosInstance from "./axiosInstance";

export const uploadThumbnailImage = async (file, dirName) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('dirName', dirName);

  try {
      const response = await axiosInstance.post('/image/upload', formData);
      return response.data.imageUrl;
  } catch (error) {
      console.error('이미지 업로드 실패:', error);
      throw error;
  }
};
