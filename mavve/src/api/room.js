import axiosInstance from "./axiosInstance";

export const createRoom = async ({ roomName, isPublic, tag, imageURL }) => {
  const response = await axiosInstance.post(
    "/rooms",
    {
      roomName,
      tag,
      imageURL,
      isPublic,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const deleteRoom = async (roomCode) => {
  const response = await axiosInstance.delete(`/rooms/${roomCode}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export const updateRoom = async (
  roomCode,
  { roomName, isPublic, tag, imageURL }
) => {
  const response = await axiosInstance.patch(
    `/rooms/${roomCode}`,
    {
      roomName,
      tag,
      imageURL,
      isPublic,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

//내가 만든 방
export const fetchMyRooms = async () => {
  const response = await axiosInstance.get("/rooms/me");

  console.log("🔎 [API 응답] /rooms/me:", response.data);

  return response.data.roomList;
};

export const enterRoom = async (roomCode) => {
  const response = await axiosInstance.get(`/rooms/${roomCode}/enter`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("🔥 response:", response);
  return response.data;
};

// 내가 좋아요한 방
export const fetchLikedRooms = async () => {
  const response = await axiosInstance.get("/rooms/like/me");

  console.log("💖 [API 응답] /rooms/like/me:", response.data);

  return response.data.roomList;
};

//방 좋아요
export const toggleRoomLike = async (roomCode) => {
  try {
    const response = await axiosInstance.post(`/rooms/${roomCode}/like`);
    return response.data;
  } catch (error) {
    console.error("방 좋아요 요청 실패:", error);
    throw error;
  }
};

export const getTopRooms = async () => {
  const response = await axiosInstance.get("/rooms/like");
  return response.data.roomList;
};
