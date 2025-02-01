import { create } from 'zustand'

interface State {
  accountId: number;
  money: number;

  source: {
    account: string;
    balance: number;
  },

  target: {
    id: number;
    name: string;
    account: string;
    type: string;
  };

  saveAccountId: (id: number) => void;
  setSource: (account: string, balance: number) => void;
  setTarget: (target: State['target']) => void;

  append: (number: number) => void;
  pop: () => void;
  clear: () => void;

  reset(): void;
}

const init = {
  accountId: 0,
  money: 0,

  source: {
    account: '',
    balance: 0,
  },

  target: {
    id: 0,
    name: '',
    account: '',
    type: '',
  },
}

const useStore = create<State>()((set) => ({
  ...init,

  saveAccountId: (id) => set({ accountId: id }),
  setSource: (account, balance) => set({ source: { account, balance } }),
  setTarget: (target) => set({ target }),
  
  append: (number) => set((state) => ({ money: Math.min(state.source.balance, 1_000_000_000_000, Number(String(state.money) + number)) })),
  pop: () => set((state) => ({ money: Number(String(state.money).slice(0, -1)) })),
  clear: () => set({ money: 0 }),

  reset: () => set(() => ({ ...init }))
}));

export default useStore;