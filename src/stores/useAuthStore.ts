import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import useUserStore from './useUserStore';

interface AuthState {
  isAuthenticated: boolean;
  hasHydrated: boolean;

  signin: () => void;
  signout: () => void;

  setAuthenticated: (isAuthenticated: boolean) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  hasHydrated: false,

  signin: () => {
    set({ isAuthenticated: true });
  },

  signout: () => {
    set({ isAuthenticated: false });
    useUserStore.getState().clearUser();
  },

  setAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
  setHasHydrated: (hasHydrated: boolean) => set({ hasHydrated }),
}));

export default useAuthStore;
