import { z } from 'zod';

export const signupSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().min(2).max(50),
  password: z.string().min(2).max(50),
});

export const loginSchema = signupSchema.pick({
  email: true,
  password: true,
});