import { create } from "zustand";

const useModelStore = create((set) => ({
  selectedModel: "C320MM", // Default model
  setSelectedModel: (modelId) => set({ selectedModel: modelId }),
}));

export default useModelStore;
