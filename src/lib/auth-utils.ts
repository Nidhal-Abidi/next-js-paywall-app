import { redirect } from "next/navigation";
import { auth } from "./auth";

// Check authentication status
export async function requireAuth() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  return session;
}

export async function requireSubscription(
  requiredPlan: "bronze" | "silver" | "gold"
) {
  const session = await requireAuth();

  if (!session.user.subscription?.planType) {
    redirect(`/payment?requiredPlan=${requiredPlan}`);
  }

  const userPlan = session.user.subscription.planType as
    | "bronze"
    | "silver"
    | "gold";

  const planHierarchy = {
    bronze: 1,
    silver: 2,
    gold: 3,
  };

  if (planHierarchy[userPlan] < planHierarchy[requiredPlan]) {
    redirect(`/payment?requiredPlan=${requiredPlan}`);
  }

  return session;
}
