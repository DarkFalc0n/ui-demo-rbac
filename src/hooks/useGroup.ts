import { useGroupStore } from '@/store';
import { IGroup } from '@/schema';

export const useGroup = (groupId: number) => {
  const { groups, setGroups } = useGroupStore();

  const getGroupById = (groupId: number) =>
    groups.find((g) => g.id === groupId);

  const getAllGroups = () => groups;

  const addGroup = (group: IGroup) => setGroups([...groups, group]);

  const addUserToGroup = (userId: number, groupId: number) => {
    const group = getGroupById(groupId);
    if (!group) return;
    if (!group.members) group.members = [];
    group.members.push(userId);
    setGroups([...groups]);
  };

  const removeUserFromGroup = (userId: number, groupId: number) => {
    const group = getGroupById(groupId);
    if (!group) return;
    group.members = group.members.filter((id) => id !== userId);
    setGroups([...groups]);
  };

  const addRoleToGroup = (roleId: number, groupId: number) => {
    const group = getGroupById(groupId);
    if (!group) return;
    if (!group.roles) group.roles = [];
    group.roles.push(roleId);
    setGroups([...groups]);
  };

  const removeRoleFromGroup = (roleId: number, groupId: number) => {
    const group = getGroupById(groupId);
    if (!group) return;
    group.roles = group.roles.filter((id) => id !== roleId);
    setGroups([...groups]);
  };

  const modifyGroup = (groupId: number, group: IGroup) => {
    const index = groups.findIndex((g) => g.id === groupId);
    if (index === -1) return;
    groups[index] = group;
    setGroups([...groups]);
  };

  const deleteGroup = (groupId: number) =>
    setGroups(groups.filter((g) => g.id !== groupId));

  return {
    getGroupById,
    getAllGroups,
    addGroup,
    addUserToGroup,
    removeUserFromGroup,
    addRoleToGroup,
    removeRoleFromGroup,
    modifyGroup,
    deleteGroup
  };
};
