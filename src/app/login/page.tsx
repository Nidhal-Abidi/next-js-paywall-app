import { GitHubSignIn } from "@/components/GitHubSignIn";
import { auth, signIn } from "@/lib/auth";
import { executeAction } from "@/lib/executeAction";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <form
        action={async (formData: FormData) => {
          "use server";
          await executeAction({
            actionFn: async () => {
              await signIn("credentials", formData);
            },
          });
        }}
        className="w-full max-w-md p-8 space-y-6 border border-gray-200 rounded-lg shadow-sm"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

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
          className="w-full bg-black text-white py-3 rounded-md cursor-pointer  font-medium hover:bg-gray-800 transition duration-200"
        >
          Sign In
        </button>
      </form>

      <GitHubSignIn />
    </div>
  );
}
