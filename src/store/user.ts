import { create } from 'zustand';
import { users } from '@/static';

interface IUserData {
  id: number;
  email: string;
  username: string;
  avatar?: string;
  roles?: number[];
  groups?: number[];
}

const useUserStore = create<{ data: IUserData[] }>((set) => ({
  data: [...users],

  addUser: (user: IUserData) =>
    set((state) => ({ data: [...state.data, user] })),

  addUserRole: (userId: number, roleId: number) => {
    set((state) => {
      const user = state.data.find((u) => u.id === userId);
      if (!user) return state;
      if (!user.roles) user.roles = [];
      user.roles.push(roleId);
      return { data: [...state.data] };
    });
  },

  addUserToGroup: (userId: number, groupId: number) => {
    set((state) => {
      const user = state.data.find((u) => u.id === userId);
      if (!user) return state;
      if (!user.groups) user.groups = [];
      user.groups.push(groupId);
      return { data: [...state.data] };
    });
  },

  modifyUser: (userId: number, user: IUserData) => {
    set((state) => {
      const index = state.data.findIndex((u) => u.id === userId);
      if (index === -1) return state;
      state.data[index] = user;
      return { data: [...state.data] };
    });
  },

  removeUser: (userId: number) =>
    set((state) => ({ data: state.data.filter((u) => u.id !== userId) }))
}));

export default useUserStore;
