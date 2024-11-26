import { IRole } from '@/schema';

export const roles: IRole[] = [
  {
    id: 1,
    color: '#F9D1D3',
    name: 'Super Admin',
    permissions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    id: 2,
    color: '#FBE8D3',
    name: 'Admin',
    permissions: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  {
    id: 3,
    color: '#E7D9F0',
    name: 'Manager',
    permissions: [1, 2, 4, 5]
  },
  {
    id: 4,
    color: '#D3F5E4',
    name: 'Team Lead',
    permissions: [1, 4, 5, 8]
  },
  {
    id: 5,
    color: '#FFF5C7',
    name: 'Staff',
    permissions: [1]
  },
  {
    id: 6,
    color: '#D3E8FF',
    name: 'Intern',
    permissions: []
  }
];
