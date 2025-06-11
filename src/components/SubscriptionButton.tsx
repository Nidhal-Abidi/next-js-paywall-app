"use client";

import { useSubscription } from "@/hooks/useSubscription";
import { useState } from "react";

export default function SubscriptionButton({
  hasSubscription,
}: {
  hasSubscription: boolean;
}) {
  const { updateSubscription, isLoading, error } = useSubscription();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubscribe = async () => {
    const success = await updateSubscription();
    if (success) {
      setShowSuccess(true);
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <button
        onClick={handleSubscribe}
        disabled={hasSubscription || isLoading}
        className={`px-4 py-2 font-medium rounded-md transition-colors ${
          hasSubscription
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-yellow-500 text-yellow-900 hover:bg-yellow-600 cursor-pointer"
        } ${isLoading ? "opacity-75" : ""}`}
      >
        {isLoading
          ? "Processing..."
          : hasSubscription
          ? "Already Subscribed"
          : "Subscribe Now"}
      </button>

      {error && <p className="text-red-600 text-sm mt-2">Error: {error}</p>}

      {showSuccess && (
        <p className="text-green-600 text-sm mt-2">
          Subscription activated successfully! 🎉
        </p>
      )}
    </div>
  );
}
