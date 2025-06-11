import Navbar from "@/components/NavBar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import SubscriptionButton from "@/components/SubscriptionButton";

export default async function Payment() {
  const session = await auth();
  if (!session) redirect("/login");

  console.log(session);
  const hasSubscription = session.user?.has_subscription || false;

  return (
    <>
      <Navbar />

      <div
        className={`flex flex-col items-center justify-center rounded-lg border shadow-sm mt-6 p-6 ${
          hasSubscription
            ? "bg-green-100 border-green-300"
            : "bg-yellow-50 border-yellow-200"
        }`}
      >
        <p
          className={`mb-4 italic ${
            hasSubscription ? "text-green-800" : "text-yellow-800"
          }`}
        >
          {hasSubscription
            ? "You're already subscribed! 🥳"
            : "You want to enjoy our premium features? Click on this button..."}
        </p>

        <SubscriptionButton hasSubscription={hasSubscription} />
      </div>
    </>
  );
}
