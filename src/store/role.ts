import { create } from 'zustand';
import { roles } from '@/static';
import { IRole } from '@/schema';

type TRoleStore = {
  roles: IRole[];
  setRoles: (roles: IRole[]) => void;
};

export const useRoleStore = create<TRoleStore>((set) => ({
  roles: [...roles],
  setRoles: (roles: IRole[]) => set({ roles })
}));
