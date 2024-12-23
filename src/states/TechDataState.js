import { create } from "zustand";

const useTechDataState = create((set) => ({
  yearTechData: [],
  setYearTechData: (data) => set((state) => ({ yearTechData: data })),
}));

export { useTechDataState };
