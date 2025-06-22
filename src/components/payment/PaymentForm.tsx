"use client";

import { Tier, tiers } from "@/utils/constants";
import { useEffect, useState } from "react";
import { CreditCard } from "./creditCard/CreditCard";
import { SubscriptionTiers } from "./SubscriptionTiers";
import { submitPayment } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface PaymentFormProps {
  requiredPlan: string | undefined;
  currentPlan: string | undefined;
}

export default function PaymentForm({
  requiredPlan,
  currentPlan,
}: PaymentFormProps) {
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const router = useRouter();
  const { update } = useSession();

  useEffect(() => {
    // Pre-select the requiredPlan if it exists
    if (requiredPlan) {
      const tier = tiers.find((t) => t.id === requiredPlan.toLowerCase());
      setSelectedTier(tier || null);
    } else {
      setSelectedTier(null);
    }
  }, [requiredPlan]);

  async function handleSubmit(formData: FormData) {
    setErrors([]);

    const res = await submitPayment(formData);
    if (!res.success) {
      // Flatten all field errors into a single array
      const allErrors = Object.values(res.errors ?? {}).flat();
      setErrors(allErrors);
      return;
    }
    await update();
    router.push("/payment");
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Choose Your Plan
        </h1>
        <p className="text-center text-gray-600 mb-12">
          One-time payment - No subscription
        </p>
        <form action={handleSubmit}>
          <SubscriptionTiers
            tiers={tiers}
            selectedTier={selectedTier}
            setSelectedTier={setSelectedTier}
            requiredPlan={requiredPlan}
            currentPlan={currentPlan}
          />
          {selectedTier && (
            <input
              type="hidden"
              name="subscriptionTier"
              value={selectedTier.id}
            />
          )}
          <CreditCard selectedTier={selectedTier} errors={errors} />
        </form>
      </div>
    </div>
  );
}
