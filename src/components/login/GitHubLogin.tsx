"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const GitHubLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn("github");
    } catch (error) {
      console.error("Sign in error:", error);
      router.push("/login?error=OAuthSignin");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mt-4">
      <button
        onClick={handleSignIn}
        disabled={isLoading}
        className={`flex items-center justify-center w-full gap-2 py-3 rounded-md font-medium transition duration-200 ${
          isLoading
            ? "bg-gray-400 text-gray-600 cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-800 cursor-pointer"
        }`}
      >
        {isLoading ? "Signing in..." : "Continue with GitHub"}
      </button>
    </div>
  );
};
