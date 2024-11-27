'use client';
import { IRole } from '@/schema';
import RoleBadge from '../atoms/roleBadge';
import { Pencil, Trash } from 'lucide-react';
import { useRole } from '@/hooks';
import { useState } from 'react';
import { permissions } from '@/static';
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
import { roleColors as colors } from '@/lib/roleColors';
import { Switch } from '../ui/switch';
import RoleForm from './forms/roleForm';

const RoleDetails = (role: IRole) => {
  const { deleteRole, modifyRole } = useRole();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  return (
    <tr className="h-20 justify-center">
      <td>
        <div className="flex gap-1">
          <RoleBadge role={role} />
        </div>
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
                <Pencil size={24} className="-translate-y-0.5" />
                <div className="hidden h-full flex-col justify-center md:flex">
                  Edit Role
                </div>
              </button>
            </DialogTrigger>
            <DialogContent className="max-h-[600px] overflow-y-auto bg-zinc-100 text-zinc-800 sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Role</DialogTitle>
              </DialogHeader>
              <RoleForm
                onSubmit={(data) => {
                  modifyRole(role.id, { ...role, ...data });
                  setIsEditDialogOpen(false);
                }}
                defaultValue={role}
              />
            </DialogContent>
          </Dialog>
          <button
            onClick={() => {
              deleteRole(role.id);
            }}
            className="flex gap-1 text-base text-zinc-400 transition-all hover:text-red-500"
          >
            <Trash size={24} className="-translate-y-0.5" />
            <div className="hidden h-full flex-col justify-center md:flex">
              Delete
            </div>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default RoleDetails;
