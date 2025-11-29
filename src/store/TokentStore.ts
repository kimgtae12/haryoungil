import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TokenType {
  token: string;
  niceToken: string;
  setToken: (token: string) => void;
  setNiceToken: (niceToken: string) => void;
}

export const useTokenStore = create<TokenType>()(
  persist(
    (set) => ({
      token: "",
      niceToken: "",
      setToken: (token: string) => set((prev) => ({ ...prev, token })),
      setNiceToken: (niceToken: string) =>
        set((prev) => ({ ...prev, niceToken })),
    }),
    {
      name: "token-storage", // Unique name for the storage
      getStorage: () => sessionStorage, // Use sessionStorage for persistence
    }
  )
);
