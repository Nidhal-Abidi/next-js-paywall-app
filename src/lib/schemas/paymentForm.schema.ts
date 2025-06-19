import { z } from "zod";

export const paymentFormSchema = z.object({
  cardNumber: z
    .string()
    .regex(/^[0-9]{16}$/, "Card number must be 16 digits long")
    .transform((val) => val.replace(/ /g, "")),
  expirationMonth: z.string().refine((val) => {
    const num = Number(val);
    return !isNaN(num) && num >= 0 && num <= 12;
  }, "Month must be between 0 and 12"),
  expirationYear: z.string().refine((val) => {
    const num = Number(val);
    return !isNaN(num) && num >= 2025 && num <= 2035;
  }, "Year must be between 2025 and 2035"),
  cvc: z.string().regex(/^\d{3,4}$/, "CVC must be 3 or 4 digits"),
  cardHolderName: z
    .string()
    .regex(
      /^[A-Za-z]+ +[A-Za-z]+$/,
      "Please enter a first and last name, letters only"
    ),
  subscriptionTier: z
    .enum(["bronze", "silver", "gold"])
    .describe("Subscription tier must be one of: bronze, silver, gold"),
});
