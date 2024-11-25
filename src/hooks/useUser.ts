import { useUserStore } from '@/store';
import { IUser } from '@/schema';
import { useRoles } from './useRole';

export const useUser = () => {
  const { users, setUsers } = useUserStore();
  const { getRoleById } = useRoles();
  const getUserById = (userId: number) => users.find((u) => u.id === userId);
  const getAllUsers = () => users;
  const getUserByUsername = (username: string) =>
    users.find((u) => u.username === username);
  const addUser = (user: IUser) => setUsers([...users, user]);
  const addUserRole = (userId: number, roleId: number) => {
    setUsers(
      users.map((u) => {
        if (u.id === userId) {
          if (!u.roles) u.roles = [];
          u.roles.push(roleId);
        }
        return u;
      })
    );
  };
  const removeUserRole = (userId: number, roleId: number) => {
    setUsers(
      users.map((u) => {
        if (u.id === userId && u.roles) {
          u.roles = u.roles.filter((r) => r !== roleId);
        }
        return u;
      })
    );
  };
  const modifyUser = (userId: number, user: IUser) => {
    setUsers(users.map((u) => (u.id === userId ? user : u)));
  };
  const removeUser = (userId: number) =>
    setUsers(users.filter((u) => u.id !== userId));
  const sortUser = (order: 'ASCENDING' | 'DESCENDING' | 'NONE' = 'ASCENDING') =>
    setUsers(
      users.sort((a, b) => {
        if (order === 'ASCENDING') {
          return a.username.localeCompare(b.username);
        } else if (order === 'DESCENDING') {
          return b.username.localeCompare(a.username);
        } else {
          return 0;
        }
      })
    );

  const filterUser = (filterBy: 'ROLE' | 'SEARCH', payload: string) => {
    if (filterBy === 'ROLE') {
      setUsers(users.filter((u) => u.roles?.includes(parseInt(payload))));
    } else if (filterBy === 'SEARCH') {
      setUsers(
        users.filter((u) =>
          u.username.toLowerCase().includes(payload.toLowerCase())
        )
      );
    }
  };
  return {
    getAllUsers,
    getUserById,
    getUserByUsername,
    addUser,
    addUserRole,
    removeUserRole,
    modifyUser,
    removeUser,
    sortUser,
    filterUser
  };
};
