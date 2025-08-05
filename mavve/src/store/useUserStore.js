import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: { nickname: "", profile: "" },
  setUser: (user) => set({ user }),
  updateProfile: (profileUrl) =>
    set((state) => ({ user: { ...state.user, profile: profileUrl } })),
}));
