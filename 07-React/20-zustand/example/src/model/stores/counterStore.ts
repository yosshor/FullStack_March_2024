import { create } from 'zustand'
interface CounterState {
    count: number;
    increasePopulation: () => void;
    removeAllBears: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
    count: 0,
    increasePopulation: () => set((state) => ({ count: state.count + 1 })),
    removeAllBears: () => set({ count: 0 }),
}))