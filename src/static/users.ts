import { IUser } from '@/schema';

export const users: IUser[] = [
  {
    id: 1,
    email: 'admin@localhost',
    username: 'admin',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=admin',
    roles: [1]
  },
  {
    id: 2,
    email: 'john@localhost',
    username: 'john',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=john',
    roles: [3, 5]
  },
  {
    id: 3,
    email: 'jane@localhost',
    username: 'jane',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=jane',
    roles: [4]
  },
  {
    id: 4,
    email: 'mike@localhost',
    username: 'mike',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=mike',
    roles: [2, 7]
  },
  {
    id: 5,
    email: 'lucy@localhost',
    username: 'lucy',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=lucy',
    roles: [8]
  },
  {
    id: 6,
    email: 'david@localhost',
    username: 'david',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=david',
    roles: [2, 6]
  },
  {
    id: 7,
    email: 'emily@localhost',
    username: 'emily',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=emily',
    roles: [5, 9]
  },
  {
    id: 8,
    email: 'tom@localhost',
    username: 'tom',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=tom',
    roles: [3]
  },
  {
    id: 9,
    email: 'olivia@localhost',
    username: 'olivia',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=olivia',
    roles: [4, 8]
  },
  {
    id: 10,
    email: 'chris@localhost',
    username: 'chris',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=chris',
    roles: [7]
  },
  {
    id: 11,
    email: 'anna@localhost',
    username: 'anna',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=anna',
    roles: [2, 4]
  }
];
