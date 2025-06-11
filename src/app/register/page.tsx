import { signUp } from "@/lib/actions";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Register() {
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <form
        action={async (formData: FormData) => {
          "use server";
          const response = await signUp(formData);
          if (response.success) {
            redirect("/login");
          }
        }}
        className="w-full max-w-md p-8 space-y-4 border border-gray-200 rounded-lg shadow-sm"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Create Account</h1>

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
