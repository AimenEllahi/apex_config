import { create } from "zustand";

const useModelStore = create((set) => ({
  selectedModel: "B320MM", // Default model
  setSelectedModel: (modelId) => set({ selectedModel: modelId }),
}));

export default useModelStore;
