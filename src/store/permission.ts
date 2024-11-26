import { create } from 'zustand';
import { permissions } from '@/static';
import { IPermission } from '@/schema';

type TPermissionStore = {
  permissions: IPermission[];
  setRoles: (permissions: IPermission[]) => void;
};

export const usePermissionStore = create<TPermissionStore>((set) => ({
  permissions: [...permissions],
  setRoles: (permissions: IPermission[]) => set({ permissions })
}));
