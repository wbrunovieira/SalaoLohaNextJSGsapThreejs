import { create } from 'zustand';
type BackgroundState = {
  backgroundImage: string;
  setBackground: (image: string) => void;
};
const useBackgroundStore = create<BackgroundState>((set) => ({
  backgroundImage: 'url(/svg/abstract-timekeeper.svg)',
  setBackground: (image: string) => set({ backgroundImage: image }),
}));

export default useBackgroundStore;
