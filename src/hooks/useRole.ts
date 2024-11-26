import { IRole } from '@/schema';
import { useRoleStore } from '@/store';

export const useRole = () => {
  const { roles, setRoles } = useRoleStore();

  const getRoleById = (roleId: number) => roles.find((r) => r.id === roleId);

  const getAllRoles = () => roles;

  const addRole = (role: IRole) => setRoles([...roles, role]);

  const modifyRole = (roleId: number, role: IRole) => {
    const index = roles.findIndex((r) => r.id === roleId);
    if (index === -1) return;
    roles[index] = role;
    setRoles([...roles]);
  };

  const deleteRole = (roleId: number) =>
    setRoles(roles.filter((r) => r.id !== roleId));

  return { getRoleById, getAllRoles, addRole, modifyRole, deleteRole };
};
