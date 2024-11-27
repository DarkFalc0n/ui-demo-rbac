import { usePermissionStore } from '@/store';

export const usePermission = () => {
  const { permissions, setPermissions } = usePermissionStore();

  const getAllPermissions = () => permissions;

  return { getAllPermissions, setPermissions };
};
