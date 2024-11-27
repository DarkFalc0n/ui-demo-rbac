import { IUser } from '@/schema';

export const users: IUser[] = [
  {
    id: 1,
    email: 'admin@localhost.com',
    username: 'admin',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=admin',
    roles: [1]
  },
  {
    id: 2,
    email: 'john@localhost.com',
    username: 'john',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=john',
    roles: [3, 5]
  },
  {
    id: 3,
    email: 'jane@localhost.com',
    username: 'jane',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=jane',
    roles: [4]
  },
  {
    id: 4,
    email: 'mike@localhost.com',
    username: 'mike',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=mike',
    roles: [2]
  },
  {
    id: 5,
    email: 'lucy@localhost.com',
    username: 'lucy',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=lucy',
    roles: [6]
  },
  {
    id: 6,
    email: 'david@localhost.com',
    username: 'david',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=david',
    roles: [2, 6]
  },
  {
    id: 7,
    email: 'emily@localhost.com',
    username: 'emily',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=emily',
    roles: [5]
  },
  {
    id: 8,
    email: 'tom@localhost.com',
    username: 'tom',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=tom',
    roles: [3]
  },
  {
    id: 9,
    email: 'olivia@localhost.com',
    username: 'olivia',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=olivia',
    roles: [4, 6]
  },
  {
    id: 10,
    email: 'chris@localhost.com',
    username: 'chris',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=chris',
    roles: [2]
  },
  {
    id: 11,
    email: 'anna@localhost.com',
    username: 'anna',
    avatar: 'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=anna',
    roles: [2, 4]
  }
];
