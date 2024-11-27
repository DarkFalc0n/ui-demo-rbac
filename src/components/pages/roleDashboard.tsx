'use client';
import React from 'react';
import { useRole } from '@/hooks';
import RoleDetails from '../molecules/roleDetails';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

const RoleDashboard = () => {
  const { getAllRoles } = useRole();
  const roles = getAllRoles();
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center">
        <div className="flex gap-4">
          <span className="flex flex-col justify-center text-2xl font-bold text-zinc-800">
            All Roles
          </span>
          <div className="justify flex flex-col justify-center rounded-full bg-zinc-300 px-6 py-0.5">
            {roles.length ?? 0}
          </div>
          <Button className="ml-auto rounded-lg bg-sky-500 text-lg hover:bg-sky-600">
            <Plus />
            Add Role
          </Button>
        </div>
      </div>
      <table className="mt-8 w-full table-auto md:table-fixed">
        <thead className="h-16 border-y-2">
          <tr>
            <th className="text-left font-semibold">Role</th>
            <th className="text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="overflow-scroll">
          {roles.map((role, index) => (
            <RoleDetails key={index} {...role} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { RoleDashboard };
