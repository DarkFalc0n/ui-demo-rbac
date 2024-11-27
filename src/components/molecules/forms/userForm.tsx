'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { MultiSelect } from '@/components/ui/multi-select';
import { editUserSchema, IUser } from '@/schema';
import { Input } from '@/components/ui/input';
import { useRole, useUser } from '@/hooks';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const UserForm = ({
  onSubmit,
  defaultValue: user
}:
  | {
      onSubmit: (data: IUser) => void;
      defaultValue?: undefined;
    }
  | {
      onSubmit: (data: Partial<IUser>) => void;
      defaultValue: IUser;
    }) => {
  const { getAllRoles } = useRole();
  const allRoles = getAllRoles();

  const form = useForm<z.infer<typeof editUserSchema>>({
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      ...user
    }
  });
  const { generateId } = useUser();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() => {
          const data = form.getValues();
          if (user) return onSubmit({ ...user, ...data });
          const modifiedData = {
            ...data,
            id: generateId(),
            avatar: `https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=${data.username}`
          };
          return onSubmit(modifiedData);
        })}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="abc@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="roles"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Roles</FormLabel>
              <FormControl>
                <MultiSelect
                  options={allRoles.map((role) => {
                    return {
                      label: role.name,
                      value: role.id.toString()
                    };
                  })}
                  onValueChange={(value) => {
                    console.log(value);
                    const numericValue = value.map((v) => parseInt(v));
                    field.onChange(numericValue);
                  }}
                  defaultValue={
                    user ? user.roles?.map((roleId) => roleId.toString()) : []
                  }
                  placeholder="Select Roles"
                  variant="inverted"
                  animation={2}
                  maxCount={3}
                />
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

export default UserForm;
