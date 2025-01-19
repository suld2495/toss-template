import { create } from 'zustand'

interface State {
  accountId: number;
  money: number;

  saveAccountId: (id: number) => void;

  append: (number: number) => void;
  pop: () => void;
  clear: () => void;
}

const useStore = create<State>()((set) => ({
  accountId: 0,
  money: 0,

  saveAccountId: (id) => set({ accountId: id }),
  
  append: (number) => set((state) => ({ money: Math.min(1_000_000_000_000, Number(String(state.money) + number)) })),
  pop: () => set((state) => ({ money: Number(String(state.money).slice(0, -1)) })),
  clear: () => set({ money: 0 }),
}));

export default useStore;