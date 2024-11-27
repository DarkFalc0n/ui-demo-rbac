import { Users, User, Award } from 'lucide-react';
import {
  UserDashboard,
  RoleDashboard,
  GroupDashboard
} from '@/components/pages';

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
  // {
  //   name: 'Groups',
  //   icon: Users,
  //   component: GroupDashboard
  // }
];
