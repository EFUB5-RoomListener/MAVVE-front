import axiosInstance from "./axiosInstance";

// 방 생성
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

// 방 삭제 
export const deleteRoom = async (roomCode) => {
  const response = await axiosInstance.delete(`/rooms/${roomCode}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
// 방 수정 
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

// 방에 플레이리스트 추가 
export const addPlayListRoom = async (roomCode, playlistId) => {
  const response = await axiosInstance.post(
    `/rooms/${roomCode}/playlists?playlistId=${playlistId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

// 방의 플레이리스트 조회 
export const getRoomPlaylists = async (roomCode) => {
  try {
    const response = await axiosInstance.get(`/rooms/${roomCode}/playlists`);
    return response.data; 
  } catch (err) {
    console.error("방의 플레이리스트 조회 실패:", err);
    throw err;
  }
};

// 방 내부 사용자 조회 
export const getRoomUsers = async (roomCode) => {
  try {
    const response = await axiosInstance.get(`/rooms/${roomCode}/users`);
    return response.data.users; 
  } catch (err) {
    console.error("방 내부 사용자 조회 실패:", err);
    throw err;
  }
};

//내가 만든 방
export const fetchMyRooms = async () => {
  const response = await axiosInstance.get("/rooms/me");

  console.log("🔎 [API 응답] /rooms/me:", response.data);

  return response.data.roomList;
};

// 방 입장 
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
  return response.data.rooms;
};

export const getRooms = async () => {
  const response = await axiosInstance.get("/rooms");
  return response.data.roomList;
};

export const searchRooms = async (keyword) => {
  const response = await axiosInstance.get(
    `/rooms/search?keyword=${encodeURIComponent(keyword)}`
  );
  console.log("검색API", response);
  return response.data.roomList;
};
