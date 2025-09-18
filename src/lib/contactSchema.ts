import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters")
    .trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please provide a valid email address")
    .max(255, "Email is too long"),
  affiliation: z
    .string()
    .max(200, "Affiliation must be less than 200 characters")
    .optional(),
  inquiryType: z
    .string()
    .min(1, "Inquiry type is required")
    .refine((val) => ['Press', 'Donation', 'Partnership', 'Membership', 'Feedback', 'Other'].includes(val), {
      message: "Please select a valid inquiry type"
    }),
  message: z
    .string()
    .min(1, "Message is required")
    .max(1000, "Message must be less than 1000 characters")
    .trim(),
});

export type ContactFormData = z.infer<typeof contactSchema>;