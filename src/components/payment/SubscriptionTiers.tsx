import { Tier } from "@/utils/constants";
import { Dispatch, SetStateAction } from "react";
import { SubscriptionTier } from "./subscriptionTiers/SubscriptionTier";

interface SubscriptionTiersProps {
  tiers: Tier[];
  selectedTier: Tier | null;
  setSelectedTier: Dispatch<SetStateAction<Tier | null>>;
  requiredPlan: string | undefined;
  currentPlan: string | undefined;
}

export function SubscriptionTiers({
  tiers,
  selectedTier,
  setSelectedTier,
  requiredPlan,
  currentPlan,
}: SubscriptionTiersProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {tiers.map((tier, idx) => {
        // Check if tier is current plan
        const isCurrentPlan = currentPlan === tier.id;
        const isDisabled = checkIfSubscriptionTierIsDisabled(
          tier.id,
          requiredPlan
        );

        return (
          <SubscriptionTier
            key={idx}
            selectedTier={selectedTier}
            setSelectedTier={setSelectedTier}
            tier={tier}
            disabled={isDisabled}
            isCurrentPlan={isCurrentPlan}
          />
        );
      })}
    </div>
  );
}

const checkIfSubscriptionTierIsDisabled = (
  tierId: "bronze" | "gold" | "silver",
  requiredPlan: string | undefined
) => {
  const planHierarchy = {
    bronze: 1,
    silver: 2,
    gold: 3,
  };
  const isDisabled = requiredPlan
    ? planHierarchy[tierId] <
      planHierarchy[requiredPlan as "bronze" | "gold" | "silver"]
    : false;

  return isDisabled;
};
