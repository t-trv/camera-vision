import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { User } from '@/types/shared/user';

interface UserState {
  user: User | null;
  hasHydrated: boolean;

  setUser: (user: User) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      hasHydrated: false,

      setUser: (user: User) => set({ user }),
      setHasHydrated: (hasHydrated: boolean) => set({ hasHydrated }),
    }),
    {
      name: 'cv_auth',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);

export default useUserStore;
