import { create } from 'zustand';
import { users } from '@/static';
import { IUser } from '@/schema';

type TUserStore = {
  users: IUser[];
  setUsers: (users: IUser[]) => void;
};

export const useUserStore = create<TUserStore>((set) => ({
  users,
  setUsers: (users: IUser[]) => set({ users })
}));
