import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  username: z.string(),
  avatar: z.string().optional(),
  roles: z.array(z.number()).optional(),
  groups: z.array(z.number()).optional()
});

export const editUserSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address'
  }),
  username: z
    .string()
    .min(3, {
      message: 'Username must be at least 3 characters long'
    })
    .max(20, {
      message: 'Username must be at most 20 characters long'
    }),
  roles: z.array(z.number()).optional()
});

export type IUser = z.infer<typeof userSchema>;
