import { create } from 'zustand';
import { roles } from '@/static';

interface IRoleData {
  id: number;
  color: string;
  name: string;
  permissions: number[];
}

const useRoleStore = create<{ data: IRoleData[] }>((set) => ({
  data: [...roles],

  addRole: (role: IRoleData) =>
    set((state) => ({ data: [...state.data, role] })),

  modifyRole: (roleId: number, role: IRoleData) => {
    set((state) => {
      const index = state.data.findIndex((r) => r.id === roleId);
      if (index === -1) return state;
      state.data[index] = role;
      return { data: [...state.data] };
    });
  },

  deleteRole: (roleId: number) => {
    set((state) => ({ data: state.data.filter((r) => r.id !== roleId) }));
  }
}));

export default useRoleStore;
