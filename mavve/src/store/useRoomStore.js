import { create } from "zustand";
import { fetchLikedRooms, fetchMyRooms } from "../api/room";

export const useRoomStore = create((set) => ({
  likedRooms: [],
  fetchAndSetLikedRooms: async () => {
    try {
      const data = await fetchLikedRooms();
      set({ likedRooms: Array.isArray(data) ? data : [] });
    } catch (err) {
      console.error("좋아요한 방 목록 갱신 실패:", err);
    }
  },
  myRooms: [],
  fetchAndSetMyRooms: async () => {
    try {
      const data = await fetchMyRooms();
      set({ myRooms: Array.isArray(data) ? data : [] });
    } catch (error) {
      console.error("내가 만든 방 목록 불러오기 실패:", error);
    }
  },

  setMyRooms: (updater) =>
    set((state) => ({
      myRooms: typeof updater === "function" ? updater(state.myRooms) : updater,
    })),
}));
