import { IUser } from '@/schema';
import { create } from 'zustand';

type AuthStore = {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user })
}));

export { useAuthStore };
