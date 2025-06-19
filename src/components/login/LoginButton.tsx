"use client";
import { useFormStatus } from "react-dom";

export function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full py-3 rounded-md font-medium transition duration-200 mt-4 ${
        pending
          ? "bg-gray-400 text-gray-600 cursor-not-allowed"
          : "bg-black text-white hover:bg-gray-800 cursor-pointer"
      }`}
    >
      {pending ? "Checking Credentials..." : "Login"}
    </button>
  );
}
