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

const RoleDetails = (role: IRole) => {
  const { deleteRole, modifyRole } = useRole();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editedRole, setEditedRole] = useState(role.name);
  const [isEditRoleVisible, setIsEditRoleVisible] = useState(false);
  const [editedRoleColor, setEditedRoleColor] = useState(role.color);
  const [isPermissionDialogOpen, setIsPermissionDialogOpen] = useState(false);
  const [permissionEnabled, setPermissionEnabled] = useState(role.permissions);

  return (
    <tr className="h-20 justify-center">
      <td
        onMouseEnter={() => setIsEditRoleVisible(true)}
        onMouseLeave={() => setIsEditRoleVisible(false)}
      >
        <div className="flex gap-1">
          <RoleBadge role={role} />
          <Dialog
            open={isEditDialogOpen}
            onOpenChange={(e) => {
              setIsEditRoleVisible(false);
              setIsEditDialogOpen(e);
            }}
          >
            <DialogTrigger
              asChild
              className={isEditRoleVisible ? 'block' : 'hidden'}
            >
              <button className="flex gap-1 text-base text-zinc-400 transition-all hover:text-sky-500">
                <Pencil size={20} className="translate-y-1" />
              </button>
            </DialogTrigger>
            <DialogContent className="bg-zinc-100 text-zinc-800 sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Role Name</DialogTitle>
              </DialogHeader>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  modifyRole(role.id, {
                    ...role,
                    name: editedRole,
                    color: editedRoleColor
                  });
                  setIsEditDialogOpen(false);
                }}
              >
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Role Name
                    </Label>
                    <Input
                      id="rolename"
                      defaultValue={role.name}
                      value={editedRole}
                      onChange={(e) => setEditedRole(e.target.value)}
                      className="col-span-3"
                    />
                    <Label htmlFor="color" className="text-right">
                      Color
                    </Label>
                    <div className="grid grid-flow-col gap-2">
                      {colors.map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setEditedRoleColor(c)}
                          style={{ backgroundColor: c }}
                          className={`h-6 w-6 rounded-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                            editedRoleColor === c
                              ? 'ring-2 ring-blue-500 ring-offset-2'
                              : ''
                          }`}
                          aria-label={`Select ${c}`}
                          title={c}
                        />
                      ))}
                    </div>
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
      </td>

      <td>
        <div className="flex gap-6">
          <Dialog
            open={isPermissionDialogOpen}
            onOpenChange={(e) => {
              setIsPermissionDialogOpen(e);
            }}
          >
            <DialogTrigger asChild>
              <button className="flex gap-1 text-base text-zinc-400 transition-all hover:text-sky-500">
                <Pencil size={24} className="-translate-y-0.5" />
                <div className="flex h-full flex-col justify-center">
                  Edit Permissions
                </div>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-[425px] items-start bg-zinc-100 text-left text-zinc-800 sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Edit Permissions</DialogTitle>
              </DialogHeader>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  modifyRole(role.id, {
                    ...role,
                    permissions: permissionEnabled
                  });
                  setIsPermissionDialogOpen(false);
                }}
              >
                <div className="mb-4 w-full py-4">
                  {permissions.map((permission, i) => (
                    <div
                      key={i}
                      className="flex h-12 border-b-2 py-4 text-left text-base text-zinc-700"
                    >
                      <p className="flex-grow">{permission.description}</p>
                      <Switch
                        className=""
                        checked={permissionEnabled.includes(permission.id)}
                        onCheckedChange={(e) => {
                          setPermissionEnabled(
                            e
                              ? [...permissionEnabled, permission.id]
                              : permissionEnabled.filter(
                                  (p) => p !== permission.id
                                )
                          );
                        }}
                      />
                    </div>
                  ))}
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
          <button
            onClick={() => {
              deleteRole(role.id);
            }}
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

export default RoleDetails;
