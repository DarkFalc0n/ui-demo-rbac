'use client';
import React, { useState } from 'react';
import { useUser } from '@/hooks';
import UserDetails from '../molecules/userDetails';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog';
import UserForm from '../molecules/forms/userForm';
import { IUser } from '@/schema';

const UserDashboard = () => {
  const { addUser, getAllUsers } = useUser();
  const users = getAllUsers();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onAddUser = (data: IUser) => {
    addUser(data);
    setIsDialogOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center">
        <div className="flex gap-4">
          <span className="flex flex-col justify-center text-2xl font-bold text-zinc-800">
            All Users
          </span>
          <div className="justify flex flex-col justify-center rounded-full bg-zinc-300 px-6 py-0.5">
            {users.length ?? 0}
          </div>
          <Dialog
            open={isDialogOpen}
            onOpenChange={(e) => {
              setIsDialogOpen(e);
            }}
          >
            <DialogTrigger asChild>
              <Button className="ml-auto rounded-lg bg-sky-500 text-lg hover:bg-sky-600">
                <Plus />
                Add User
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-zinc-100 text-zinc-800 sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add User</DialogTitle>
              </DialogHeader>
              <UserForm onSubmit={onAddUser} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <table className="mt-8 w-full table-fixed">
        <thead className="h-16 border-y-2">
          <tr>
            <th className="text-left font-semibold">User</th>
            <th className="text-left font-semibold">Role</th>
            <th className="text-left font-semibold">Groups</th>
            <th className="text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="overflow-scroll">
          {users.map((user, index) => (
            <UserDetails key={index} {...user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { UserDashboard };
