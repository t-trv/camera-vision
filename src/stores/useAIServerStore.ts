import { create } from 'zustand';

interface AIServerState {
  serverIp: string;
  serverPort: string;
  setServerIp: (serverIp: string) => void;
  setServerPort: (serverPort: string) => void;
}

export const useAIServerStore = create<AIServerState>((set) => ({
  serverIp: 'ws://localhost',
  serverPort: '8000',

  setServerIp: (serverIp: string) => set({ serverIp }),
  setServerPort: (serverPort: string) => set({ serverPort }),
}));
