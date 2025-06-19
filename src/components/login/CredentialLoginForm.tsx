"use client";
import { signIn } from "next-auth/react";
import { LoginButton } from "./LoginButton";
import { redirect } from "next/navigation";

interface CredentialLoginFormProps {
  successMessage: string | null;
  errorMessage: string | null;
}

export function CredentialLoginForm({
  successMessage,
  errorMessage,
}: CredentialLoginFormProps) {
  return (
    <form
      action={async (formData: FormData) => {
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

      {successMessage && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md text-sm">
          {successMessage}
        </div>
      )}

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

      <LoginButton />
    </form>
  );
}
