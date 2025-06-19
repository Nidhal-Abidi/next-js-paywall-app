import db from "./db";
import { userSignupSchema } from "./schemas/userSignup.schema";
import bcrypt from "bcrypt";

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
    if (error.name === "ZodError") {
      return { success: false, error: "ValidationError" };
    }

    // Handle other database errors
    return { success: false, error: "DatabaseError" };
  }
};
