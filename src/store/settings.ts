import { create } from "zustand";

interface SettingState {
  isThemeOpen: boolean;
  setIsThemeOpen: (payload: boolean) => void;
}

const useSettingStore = create<SettingState>()((set) => ({
  isThemeOpen: false,
  setIsThemeOpen: (payload) => set((state) => ({ isThemeOpen: payload })),
}));

export default useSettingStore;
