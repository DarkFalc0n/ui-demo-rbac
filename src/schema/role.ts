import { z } from 'zod';

export const roleSchema = z.object({
  id: z.number(),
  color: z.string(),
  name: z.string(),
  permissions: z.array(z.number())
});

export const editRoleSchema = z.object({
  color: z.string(),
  name: z.string(),
  permissions: z.array(z.number())
});

export type IRole = z.infer<typeof roleSchema>;
