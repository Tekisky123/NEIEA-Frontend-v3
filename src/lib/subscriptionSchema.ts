import { z } from "zod";

export const subscriptionSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(255, "Email is too long"),
});

export type SubscriptionFormData = z.infer<typeof subscriptionSchema>;
