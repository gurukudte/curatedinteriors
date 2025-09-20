import * as z from "zod";
export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z
    .string()
    .min(6, { message: "Minimum 6 characters required" })
    .max(30),
});
export const SignupSchema = z.object({
  name: z.string({ message: "Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  password: z
    .string()
    .min(6, { message: "Minimum 6 characters required" })
    .max(30),
});

export const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[0-9]{10}$/.test(val), {
      message: "Phone must be a valid 10-digit number",
    }),
  projectType: z
    .enum([
      "residential",
      "commercial",
      "renovation",
      "styling",
      "consultation",
    ])
    .optional(),
  message: z
    .string()
    .min(10, "Message should be at least 10 characters")
    .max(1000, "Message is too long")
    .optional(),
});

export type ContactInput = z.infer<typeof ContactSchema>;