import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AIServerState {
  serverIp: string;
  serverPort: string;
  setServerIp: (serverIp: string) => void;
  setServerPort: (serverPort: string) => void;
}

export const useAIServerStore = create<AIServerState>()(
  persist(
    (set, get) => ({
      serverIp: 'ws://localhost',
      serverPort: '8000',

      setServerIp: (serverIp: string) => set({ serverIp }),
      setServerPort: (serverPort: string) => set({ serverPort }),

      getServerUrl: () => `${get().serverIp}:${get().serverPort}`,
    }),
    {
      name: 'ai-server-storage',
    },
  ),
);
