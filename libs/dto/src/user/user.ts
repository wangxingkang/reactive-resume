import { z } from 'zod';

export const usernameSchema = z
  .string()
  .min(3)
  .max(255)
  .regex(/^[\w.-]+$/, {
    message: 'Usernames can only contain letters, numbers, periods, hyphens, and underscores.',
  })
  .transform((value) => value.toLowerCase());
