import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar/NavBar";
import PaymentForm from "@/components/payment/PaymentForm";

export default async function Payment() {
  const session = await auth();
  if (!session) redirect("/login");

  const hasSubscription = session.user?.subscription ? true : false;

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
            : "You want to enjoy our premium features? Pay for one of our 3 subscription tiers by providing your details below!"}
        </p>
      </div>
      <PaymentForm />
    </>
  );
}
