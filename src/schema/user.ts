import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  username: z.string(),
  avatar: z.string().optional(),
  roles: z.array(z.number()).optional(),
  groups: z.array(z.number()).optional()
});

export type IUser = z.infer<typeof userSchema>;
