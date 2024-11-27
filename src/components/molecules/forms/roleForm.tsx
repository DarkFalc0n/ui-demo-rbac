'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { editRoleSchema, IRole } from '@/schema';
import { Input } from '@/components/ui/input';
import { useRole, usePermission } from '@/hooks';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { roleColors as colors } from '@/lib/roleColors';
import { Switch } from '@/components/ui/switch';

const RoleForm = ({
  onSubmit,
  defaultValue: role
}:
  | {
      onSubmit: (data: IRole) => void;
      defaultValue?: undefined;
    }
  | {
      onSubmit: (data: Partial<IRole>) => void;
      defaultValue: IRole;
    }) => {
  const { getAllPermissions } = usePermission();
  const allPermissions = getAllPermissions();

  const form = useForm<z.infer<typeof editRoleSchema>>({
    resolver: zodResolver(editRoleSchema),
    defaultValues: role && role.permissions ? { ...role } : { permissions: [] }
  });
  const { generateId } = useRole();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() => {
          const data = form.getValues();
          if (role) return onSubmit({ ...role, ...data });
          const modifiedData = {
            ...data,
            id: generateId()
          };
          return onSubmit(modifiedData);
        })}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Role name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Color</FormLabel>
              <FormControl>
                <div className="grid grid-flow-col gap-2">
                  {colors.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => field.onChange(c)}
                      style={{ backgroundColor: c }}
                      className={`h-6 w-6 rounded-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                        field.value === c
                          ? 'ring-2 ring-blue-500 ring-offset-2'
                          : ''
                      }`}
                      aria-label={`Select ${c}`}
                      title={c}
                    />
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="permissions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Permissions</FormLabel>
              <FormControl>
                <div className="mb-4 w-full py-4">
                  {allPermissions.map((permission, i) => (
                    <div
                      key={i}
                      className="flex h-12 border-b-2 py-4 text-left text-base text-zinc-700"
                    >
                      <p className="flex-grow">{permission.description}</p>
                      <Switch
                        className=""
                        checked={
                          field.value
                            ? field.value.includes(permission.id)
                            : false
                        }
                        onCheckedChange={(e) => {
                          field.onChange(
                            e
                              ? [...field.value, permission.id]
                              : field.value.filter((p) => p !== permission.id)
                          );
                        }}
                      />
                    </div>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-end">
          <Button
            type="submit"
            className="rounded-lg bg-sky-500 text-lg hover:bg-sky-600"
          >
            Save changes
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RoleForm;
