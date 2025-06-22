import Navbar from "@/components/navbar/NavBar";
import PaymentForm from "@/components/payment/PaymentForm";
import { requireAuth } from "@/lib/auth-utils";
import { SessionProvider } from "next-auth/react";

export default async function Payment({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | undefined }>;
}) {
  const session = await requireAuth();
  const currentSearchParams = await searchParams;
  const requiredPlan = currentSearchParams?.requiredPlan;

  const hasSubscription = !!session.user.subscription;
  const currentPlan = session.user.subscription?.planType;

  // Determine message based on context
  const message = getUserMessage(hasSubscription, requiredPlan, currentPlan);

  return (
    <>
      <Navbar />
      <div
        className={`flex flex-col items-center justify-center rounded-lg border shadow-sm mt-6 p-6 ${
          hasSubscription && !requiredPlan
            ? "bg-green-100 border-green-300"
            : "bg-yellow-50 border-yellow-200"
        }`}
      >
        <p
          className={`mb-4 italic ${
            hasSubscription && !requiredPlan
              ? "text-green-800"
              : "text-yellow-800"
          }`}
        >
          {message}
        </p>
      </div>
      <SessionProvider>
        <PaymentForm requiredPlan={requiredPlan} currentPlan={currentPlan} />
      </SessionProvider>
    </>
  );
}

const getUserMessage = (
  hasSubscription: boolean,
  requiredPlan: string | undefined,
  currentPlan: string | undefined
) => {
  if (hasSubscription && requiredPlan) {
    return `Your current ${currentPlan?.toUpperCase()} plan doesn't include this feature. Upgrade to ${requiredPlan?.toUpperCase()} or higher!`;
  } else if (requiredPlan) {
    return `To access this content, you need at least the ${requiredPlan?.toUpperCase()} subscription.`;
  } else if (hasSubscription) {
    return "You're already subscribed! 🥳";
  } else {
    return "You want to enjoy our premium features? Pay for one of our 3 subscription tiers!";
  }
};
