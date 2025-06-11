import { GitHubSignIn } from "@/components/GitHubSignIn";
import { auth, signIn } from "@/lib/auth";
import { redirect } from "next/navigation";

interface LoginProps {
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
}

export default async function Login({ searchParams }: LoginProps) {
  const session = await auth();
  if (session) redirect("/dashboard");

  const params = await searchParams;

  // Map Auth.js error codes to user-friendly messages
  const getErrorMessage = (error: string) => {
    switch (error) {
      case "CredentialsSignin":
        return "Invalid email or password. Please try again.";
      case "AccessDenied":
        return "Access denied. Please check your credentials.";
      case "Configuration":
        return "There was a problem with the server configuration.";
      case "Verification":
        return "The verification token has expired or is invalid.";
      default:
        return "An unexpected error occurred. Please try again.";
    }
  };

  const errorMessage = params.error ? getErrorMessage(params.error) : null;
  const successMessage = params.message || null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <form
        action={async (formData: FormData) => {
          "use server";
          await signIn("credentials", {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
            redirect: false, // Prevent automatic redirect to handle errors manually
          })
            .then((result) => {
              if (result?.error) {
                redirect(`/login?error=${result.error}`);
              } else {
                redirect("/dashboard");
              }
            })
            .catch(() => {
              redirect("/login?error=CredentialsSignin");
            });
        }}
        className="w-full max-w-md p-8 space-y-6 border border-gray-200 rounded-lg shadow-sm"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        {/* Success Message Display */}
        {successMessage && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md text-sm">
            {successMessage}
          </div>
        )}

        {/* Error Message Display */}
        {errorMessage && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
            {errorMessage}
          </div>
        )}

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
          className="w-full bg-black text-white py-3 rounded-md cursor-pointer font-medium hover:bg-gray-800 transition duration-200"
        >
          Sign In
        </button>
      </form>

      <GitHubSignIn />
    </div>
  );
}
