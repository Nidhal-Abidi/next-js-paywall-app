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

// Check subscription level
export async function requireSubscription(
  requiredPlan: "BRONZE" | "SILVER" | "GOLD"
) {
  const session = await requireAuth();

  if (!session.user.subscription?.planType) {
    redirect(`/payment?requiredPlan=${requiredPlan}`);
  }

  const userPlan = session.user.subscription.planType as
    | "BRONZE"
    | "SILVER"
    | "GOLD";

  // Define plan hierarchy
  const planHierarchy = {
    BRONZE: 1,
    SILVER: 2,
    GOLD: 3,
  };

  if (planHierarchy[userPlan] < planHierarchy[requiredPlan]) {
    redirect(`/payment?requiredPlan=${requiredPlan}`);
  }

  return session;
}
