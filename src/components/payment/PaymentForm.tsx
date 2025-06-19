"use client";

import { Tier, tiers } from "@/utils/constants";
import { useState } from "react";
import { CreditCard } from "./creditCard/CreditCard";
import { SubscriptionTiers } from "./SubscriptionTiers";
import { submitPayment } from "@/lib/actions";

export default function PaymentForm() {
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Choose Your Plan
        </h1>
        <p className="text-center text-gray-600 mb-12">
          One-time payment - No subscription
        </p>
        <form action={submitPayment}>
          {/* Tier Grid */}
          <SubscriptionTiers
            tiers={tiers}
            selectedTier={selectedTier}
            setSelectedTier={setSelectedTier}
          />
          {/* CreditCard Form */}
          <CreditCard selectedTier={selectedTier} />
        </form>
      </div>
    </div>
  );
}
