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


export const enterRoom= async (roomCode) => {
  const response = await axiosInstance.get(`/rooms/${roomCode}/enter`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
 

