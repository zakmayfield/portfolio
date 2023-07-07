import { z } from 'zod';

export const UsernameValidator = z.object({
  username: z
    .string()
    .min(3)
    .max(20)
    .regex(/^[a-zA-Z0-9_]+$/),
});

export type EditUsernamePayload = z.infer<typeof UsernameValidator>;
