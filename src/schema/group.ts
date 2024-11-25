import { z } from 'zod';

export const groupSchema = z.object({
  id: z.number(),
  name: z.string(),
  adminId: z.number(),
  roles: z.array(z.number()),
  members: z.array(z.number())
});

export type IGroup = z.infer<typeof groupSchema>;
