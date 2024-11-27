import { User, Award } from 'lucide-react';
import { UserDashboard, RoleDashboard } from '@/components/pages';

export const sideNavRoutes = [
  {
    name: 'Users',
    icon: User,
    component: UserDashboard
  },
  {
    name: 'Roles',
    icon: Award,
    component: RoleDashboard
  }
];
