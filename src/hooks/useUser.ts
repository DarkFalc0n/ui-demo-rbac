import { useUserStore } from '@/store';
import { IUser } from '@/schema';

export const useUser = () => {
  const { users, setUsers } = useUserStore();
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
  const modifyUser = (userId: number, user: IUser) => {
    setUsers(users.map((u) => (u.id === userId ? user : u)));
  };
  const removeUser = (userId: number) =>
    setUsers(users.filter((u) => u.id !== userId));
  return {
    getAllUsers,
    getUserById,
    getUserByUsername,
    addUser,
    addUserRole,
    modifyUser,
    removeUser
  };
};
