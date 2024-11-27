import { create } from 'zustand';
import { permissions } from '@/static';
import { IPermission } from '@/schema';

type TPermissionStore = {
  permissions: IPermission[];
  setPermissions: (permissions: IPermission[]) => void;
};

export const usePermissionStore = create<TPermissionStore>((set) => ({
  permissions: [...permissions],
  setPermissions: (permissions: IPermission[]) => set({ permissions })
}));
