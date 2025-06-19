"use client";

import { Tier, tiers } from "@/utils/constants";
import { ChangeEvent, FormEvent, useState } from "react";
import { CreditCard } from "./CreditCard";
import { SubscriptionTiers } from "./SubscriptionTiers";

export default function PaymentForm() {
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Process payment here
    console.log("Processing payment for:", selectedTier, cardDetails);
    alert(`Payment submitted for ${selectedTier?.name} tier!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Choose Your Plan
        </h1>
        <p className="text-center text-gray-600 mb-12">
          One-time payment - No subscription
        </p>

        {/* Tier Grid */}
        <SubscriptionTiers
          tiers={tiers}
          selectedTier={selectedTier}
          setSelectedTier={setSelectedTier}
        />
        {/* Payment Form */}
        <CreditCard
          selectedTier={selectedTier}
          setSelectedTier={setSelectedTier}
          handleSubmit={handleSubmit}
          cardDetails={cardDetails}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
}
