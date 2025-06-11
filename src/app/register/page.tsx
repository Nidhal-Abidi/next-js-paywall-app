import { signUp } from "@/lib/actions";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

interface RegisterProps {
  searchParams: Promise<{
    error?: string;
  }>;
}

export default async function Register({ searchParams }: RegisterProps) {
  const session = await auth();
  if (session) redirect("/dashboard");

  const params = await searchParams;

  // Map registration error codes to user-friendly messages
  const getErrorMessage = (error: string) => {
    switch (error) {
      case "UserExists":
        return "An account with this email already exists. Please try logging in instead.";
      case "WeakPassword":
        return "Password must be at least 8 characters long and contain uppercase, lowercase, and numbers.";
      case "InvalidEmail":
        return "Please enter a valid email address.";
      case "ValidationError":
        return "Please check your input and make sure all fields are filled correctly.";
      case "DatabaseError":
        return "There was a problem creating your account. Please try again later.";
      default:
        return "An unexpected error occurred. Please try again.";
    }
  };

  const errorMessage = params.error ? getErrorMessage(params.error) : null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <form
        action={async (formData: FormData) => {
          "use server";
          const response = await signUp(formData);
          if (response.success) {
            redirect(
              "/login?message=Account created successfully! Please log in."
            );
          } else {
            // Handle specific error types from your signUp function
            const errorType = response.error || "ValidationError";
            redirect(`/register?error=${errorType}`);
          }
        }}
        className="w-full max-w-md p-8 space-y-4 border border-gray-200 rounded-lg shadow-sm"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Create Account</h1>

        {errorMessage && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
            {errorMessage}
          </div>
        )}

        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition duration-200 mt-4"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
