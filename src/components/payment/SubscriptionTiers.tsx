import { Tier } from "@/utils/constants";
import { Dispatch, SetStateAction } from "react";
import { SubscriptionTier } from "./subscriptionTiers/SubscriptionTier";

interface SubscriptionTiersProps {
  tiers: Tier[];
  selectedTier: Tier | null;
  setSelectedTier: Dispatch<SetStateAction<Tier | null>>;
}

export function SubscriptionTiers({
  tiers,
  selectedTier,
  setSelectedTier,
}: SubscriptionTiersProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {tiers.map((tier, idx) => {
        return (
          <SubscriptionTier
            key={idx}
            selectedTier={selectedTier}
            setSelectedTier={setSelectedTier}
            tier={tier}
          />
        );
      })}
    </div>
  );
}
