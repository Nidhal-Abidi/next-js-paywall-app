import db from "./db";
import { executeAction } from "./executeAction";
import { userSignupSchema } from "./schemas/userSignup.schema";

export const signUp = async (formData: FormData) => {
  return executeAction({
    actionFn: async () => {
      const email = formData.get("email");
      const password = formData.get("password");
      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");

      const validatedData = userSignupSchema.parse({
        email,
        password,
        firstName,
        lastName,
      });
      await db.user.create({
        data: {
          first_name: validatedData.firstName,
          last_name: validatedData.lastName,
          email: validatedData.email.toLocaleLowerCase(),
          password: validatedData?.password,
        },
      });
    },
    successMessage: "Signed up successfully",
  });
};
