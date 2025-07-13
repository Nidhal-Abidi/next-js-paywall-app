"use server";
import { getSubscriptionPrice } from "@/utils/constants";
import db from "./db";
import { paymentFormSchema } from "./schemas/paymentForm.schema";
import { userSignupSchema } from "./schemas/userSignup.schema";
import bcrypt from "bcrypt";
import { requireAuth } from "./auth-utils";

export const signUp = async (formData: FormData) => {
  try {
    const email = formData.get("email");
    const password = formData.get("password");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");

    // Validate the input data
    const validatedData = userSignupSchema.parse({
      email,
      password,
      firstName,
      lastName,
    });

    // Check if user already exists
    const existingUser = await db.user.findFirst({
      where: {
        email: validatedData.email.toLowerCase(),
      },
    });

    if (existingUser) {
      return { success: false, error: "UserExists" };
    }

    // Hash the password
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(validatedData.password!, saltRounds);

    // Create the user
    await db.user.create({
      data: {
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email.toLowerCase(),
        password: passwordHash,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("SignUp error:", error);

    // Handle Zod validation errors
    if (error instanceof Error && error.name === "ZodError") {
      return { success: false, error: "ValidationError" };
    }

    // Handle other database errors
    return { success: false, error: "DatabaseError" };
  }
};

export async function submitPayment(formData: FormData) {
  const data = {
    cardNumber: formData.get("cardNumber") as string,
    expirationMonth: formData.get("expirationMonth") as string,
    expirationYear: formData.get("expirationYear") as string,
    cvc: formData.get("cvc") as string,
    cardHolderName: formData.get("cardHolderName") as string,
    subscriptionTier: formData.get("subscriptionTier") as string,
  };
  const result = paymentFormSchema.safeParse(data);
  if (!result.success) {
    const { fieldErrors } = result.error.flatten();
    return { success: false, errors: fieldErrors };
  }
  const newData = {
    ...result.data,
    subscriptionPrice: getSubscriptionPrice(data.subscriptionTier),
  };
  try {
    const session = await requireAuth();
    // Create transaction
    await db.transaction.create({
      data: {
        userId: session.user.id,
        planType: newData.subscriptionTier,
        amount: newData.subscriptionPrice,
        currency: "EUR",
      },
    });

    // Update/create subscription
    await db.subscription.upsert({
      where: { userId: session.user.id },
      update: {
        planType: newData.subscriptionTier,
        amount: newData.subscriptionPrice,
      },
      create: {
        userId: session.user.id,
        planType: newData.subscriptionTier,
        amount: newData.subscriptionPrice,
        currency: "EUR",
      },
    });

    return { success: true };
  } catch (e) {
    console.error("Payment processing failed:", e);
    return { success: false, errors: e };
  }
}
