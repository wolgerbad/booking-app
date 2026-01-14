import { create } from 'zustand';

interface BearState {
  nights: number;
  startDate: null | string;
  endDate: null | string;
  setNights: (value: number) => void;
  setStartDate: (value: string) => void;
  setEndDate: (value: string) => void;
}

export const useBookingStore = create<BearState>()((set) => ({
  nights: 0,
  startDate: null,
  endDate: null,
  setNights: (value) => set(() => ({ nights: value })),
  setStartDate: (value) => set(() => ({ startDate: value })),
  setEndDate: (value) => set(() => ({ endDate: value })),
}));
