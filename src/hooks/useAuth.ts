import { useAuthStore } from '@/store/auth';
import { useUser } from './useUser';

export const useAuth = () => {
  const { user, setUser } = useAuthStore();
  const { getUserByUsername } = useUser();
  const handleLogin = (username: string) => {
    setUser(getUserByUsername(username) ?? null);
  };
  const handleLogout = () => setUser(null);
  return { user, handleLogin, handleLogout };
};
