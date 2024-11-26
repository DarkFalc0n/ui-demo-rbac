'use client';
import { IUser } from '@/schema';
import RoleBadge from '../atoms/roleBadge';
import { useRole, useUser } from '@/hooks';
import { Pencil, Trash } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useState } from 'react';

const UserDetails = (user: IUser) => {
  const { getRoleById } = useRole();
  const { removeUser, removeUserRole, modifyUser } = useUser();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editedUsername, setEditedUsername] = useState(user.username);
  const [isEditVisible, setIsEditVisible] = useState(false);

  return (
    <tr className="h-20 justify-center">
      <td>
        <div
          className="flex gap-4"
          onMouseEnter={() => setIsEditVisible(true)}
          onMouseLeave={() => setIsEditVisible(false)}
        >
          <img
            src={user.avatar}
            alt="avatar"
            className="h-12 w-12 rounded-full"
          />
          <div className="flex flex-col justify-center">
            <div className="flex gap-3 font-medium">
              {user.username.toLocaleUpperCase()}
              <Dialog
                open={isEditDialogOpen}
                onOpenChange={(e) => {
                  setIsEditVisible(false);
                  setIsEditDialogOpen(e);
                }}
              >
                <DialogTrigger
                  asChild
                  className={isEditVisible ? 'block' : 'hidden'}
                >
                  <button className="flex gap-1 text-base text-zinc-400 transition-all hover:text-sky-500">
                    <Pencil size={20} />
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-zinc-100 text-zinc-800 sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit Username</DialogTitle>
                  </DialogHeader>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      modifyUser(user.id, {
                        ...user,
                        username: editedUsername
                      });
                      setIsEditDialogOpen(false);
                    }}
                  >
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Username
                        </Label>
                        <Input
                          id="username"
                          defaultValue={user.username}
                          value={editedUsername}
                          onChange={(e) => setEditedUsername(e.target.value)}
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        type="submit"
                        className="rounded-lg bg-sky-500 text-lg hover:bg-sky-600"
                      >
                        Save changes
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
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
              deleteRole={() => {
                removeUserRole(user.id, role);
              }}
              showDeleteButton
            />
          ) : null;
        }) ?? 'No Role'}
      </td>
      <td className="text-zinc-600">
        {user.groups?.length! > 0 ? user.groups : 'No groups'}
      </td>
      <td>
        <div className="flex gap-6">
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
