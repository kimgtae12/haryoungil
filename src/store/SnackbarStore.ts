import { create } from "zustand";

interface SnackbarStore {
  isOpen: boolean;
  message: string;
  actionLabel: string;
  onClick: (() => void) | undefined;
  showSnackbar: (
    message: string,
    actionLabel?: string,
    onClick?: () => void
  ) => void;
  closeSnackbar: () => void;
}

export const useSnackbarStore = create<SnackbarStore>((set) => ({
  isOpen: false,
  message: "",
  actionLabel: "",
  onClick: undefined,
  showSnackbar: (message: string, actionLabel?: string, onClick?: () => void) =>
    set({ isOpen: true, actionLabel, message, onClick }),
  closeSnackbar: () =>
    set({ isOpen: false, message: "", actionLabel: "", onClick: undefined }),
}));
