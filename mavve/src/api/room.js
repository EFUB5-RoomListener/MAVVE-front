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


export const updateRoom = async (roomCode, { roomName, isPublic, tag, imageURL }) => {
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

