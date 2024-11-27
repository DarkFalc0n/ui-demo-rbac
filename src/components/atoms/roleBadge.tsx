'use client';
import { cn } from '@/lib/utils';
import { IRole } from '@/schema';
import { X } from 'lucide-react';
import { useState } from 'react';

const RoleBadge = ({
  role,
  deleteRole,
  showDeleteButton = false,
  className
}: {
  role: IRole;
  deleteRole?: () => void;
  showDeleteButton?: boolean;
  className?: string;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      style={{ backgroundColor: role.color }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn(
        className,
        `relative mr-2 inline-flex max-h-8 w-auto justify-start gap-2 rounded-full px-4 py-1 font-medium text-zinc-800`
      )}
    >
      {role.name}
      {showDeleteButton && isHovering && (
        <button
          onClick={deleteRole}
          className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border bg-zinc-100"
        >
          <X className="size-4 text-zinc-800" />
        </button>
      )}
    </div>
  );
};

export default RoleBadge;
