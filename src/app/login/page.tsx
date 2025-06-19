import { CredentialLoginForm } from "@/components/login/CredentialLoginForm";
import { GitHubLogin } from "@/components/login/GitHubLogin";
import { auth } from "@/lib/auth";
import { getLoginPageErrorMessage } from "@/utils/utilites";
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

  const errorMessage = params.error
    ? getLoginPageErrorMessage(params.error)
    : null;
  const successMessage = params.message || null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <CredentialLoginForm
        errorMessage={errorMessage}
        successMessage={successMessage}
      />

      <GitHubLogin />
    </div>
  );
}
