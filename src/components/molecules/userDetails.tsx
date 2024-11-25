'use client';
import { IUser } from '@/schema';
import React from 'react';
import RoleBadge from '../atoms/roleBadge';
import { useRoles, useUser } from '@/hooks';
import { Trash } from 'lucide-react';

const UserDetails = (user: IUser) => {
  const { getAllRoles } = useRoles();
  let roles = getAllRoles();
  const { removeUser, removeUserRole } = useUser();

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
      <td>
        {user.roles?.map((role, index) => (
          <RoleBadge
            key={index}
            role={roles[role - 1]}
            deleteRole={() => {
              removeUserRole(user.id, role);
            }}
            showDeleteButton
          />
        )) ?? 'No Role'}
      </td>
      <td>{user.groups}</td>
      <td>
        <button
          onClick={() => removeUser(user.id)}
          className="flex gap-1 text-base text-zinc-400 hover:text-red-500"
        >
          <Trash size={24} className="-translate-y-0.5" />
          <div className="flex h-full flex-col justify-center">Delete</div>
        </button>
      </td>
    </tr>
  );
};

export default UserDetails;
