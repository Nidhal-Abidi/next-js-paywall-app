import { z } from "zod";

export const userSignupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).optional(),
  firstName: z.string().min(3),
  lastName: z.string().min(3),
});
