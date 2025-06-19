import { RegisterForm } from "@/components/register/RegisterForm";
import { auth } from "@/lib/auth";
import { getRegisterPageErrorMessage } from "@/utils/utilites";
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

  const errorMessage = params.error
    ? getRegisterPageErrorMessage(params.error)
    : null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <RegisterForm errorMessage={errorMessage} />
    </div>
  );
}
