'use client';
import { IUser } from '@/schema';
import RoleBadge from '../atoms/roleBadge';
import { useRole, useUser } from '@/hooks';
import { Pencil, Trash } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog';

import { useState } from 'react';
import UserForm from './forms/userForm';

const UserDetails = (user: IUser) => {
  const { getRoleById } = useRole();
  const { removeUser, removeUserRole, modifyUser } = useUser();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const onEdit = (data: Partial<IUser>) => {
    modifyUser(user.id, { ...user, ...data });
    setIsEditDialogOpen(false);
  };

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
            <div className="flex gap-3 font-medium">
              {user.username.toLocaleUpperCase()}
            </div>
            <div className="text-sm text-zinc-500">{user.email}</div>
          </div>
        </div>
      </td>
      <td>
        {user.roles?.map((role, index) => {
          const userRole = getRoleById(role);
          return !!userRole ? (
            <RoleBadge
              key={index}
              role={userRole}
              className="mb-2"
              deleteRole={() => {
                removeUserRole(user.id, role);
              }}
            />
          ) : null;
        }) ?? 'No Role'}
      </td>
      <td className="text-zinc-600">
        {user.groups?.length && user.groups?.length > 0
          ? user.groups
          : 'No groups'}
      </td>
      <td>
        <div className="flex gap-6">
          <Dialog
            open={isEditDialogOpen}
            onOpenChange={(e) => {
              setIsEditDialogOpen(e);
            }}
          >
            <DialogTrigger asChild>
              <button className="flex gap-1 text-base text-zinc-400 transition-all hover:text-sky-500">
                <Pencil size={20} />
                Edit User
              </button>
            </DialogTrigger>
            <DialogContent className="bg-zinc-100 text-zinc-800 sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit User</DialogTitle>
              </DialogHeader>
              <UserForm onSubmit={onEdit} defaultValue={user} />
            </DialogContent>
          </Dialog>
          <button
            onClick={() => removeUser(user.id)}
            className="flex gap-1 text-base text-zinc-400 transition-all hover:text-red-500"
          >
            <Trash size={24} className="-translate-y-0.5" />
            <div className="flex h-full flex-col justify-center">Delete</div>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserDetails;
