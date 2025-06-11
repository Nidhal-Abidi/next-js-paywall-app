"use client";
import { signIn } from "next-auth/react";

export const GitHubSignIn = () => (
  <div className="w-full max-w-md mt-4">
    <button
      type="button"
      onClick={() => signIn("github")}
      className="flex items-center justify-center w-full cursor-pointer gap-2 bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition duration-200"
    >
      Continue with GitHub
    </button>
  </div>
);
