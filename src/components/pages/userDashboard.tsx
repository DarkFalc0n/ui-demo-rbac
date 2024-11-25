'use client';
import React from 'react';
import { useUser } from '@/hooks';
import UserDetails from '../molecules/userDetails';

const UserDashboard = () => {
  const { getAllUsers } = useUser();
  const users = getAllUsers();
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center">
        <div className="flex gap-4">
          <span className="text-2xl font-bold text-zinc-800">All Users</span>
          <div className="justify flex flex-col justify-center rounded-full bg-zinc-300 px-6 py-0.5">
            {users.length ?? 0}
          </div>
        </div>
      </div>
      <table className="mt-8 w-full table-fixed">
        <thead className="h-16 border-y-2">
          <tr>
            <th className="text-left font-semibold">Name</th>
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

export default UserDashboard;
