"use client";

import { signOut } from "next-auth/react";

export function SignOut() {
  return (
    <button
      type="button"
      onClick={() => signOut()}
      className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-white hover:bg-gray-500 px-3 py-2 sm:px-4 sm:py-3 rounded transition duration-200"
    >
      Logout
    </button>
  );
}
