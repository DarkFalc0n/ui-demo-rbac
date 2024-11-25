import { IUser } from '@/schema';
import React from 'react';

const UserDetails = (user: IUser) => {
  return (
    <tr className="h-20 justify-center">
      <td>
        <div className="flex gap-4">
          <img
            src={user.avatar}
            alt="avatar"
            className="h-12 w-12 rounded-full"
          />
          <div className="flex flex-col justify-center">
            <div className="font-medium">
              {user.username.toLocaleUpperCase()}
            </div>
            <div className="text-sm text-zinc-500">{user.email}</div>
          </div>
        </div>
      </td>
      <td>{user.roles}</td>
      <td>{user.groups}</td>
      <td>{user.email}</td>
    </tr>
  );
};

export default UserDetails;
