import { Tier } from "@/utils/constants";
import { selectedTierColor, tierColorOnHover } from "@/utils/utilites";
import { Dispatch, SetStateAction } from "react";
import { SubscriptionTierHeader } from "./SubscriptionTierHeader";
import { SubscriptionTierFeatures } from "./SubscriptionTierFeatures";
import { SubscriptionTierSelectBtn } from "./SubscriptionTierSelectBtn";

interface SubscriptionTierProps {
  tier: Tier;
  selectedTier: Tier | null;
  setSelectedTier: Dispatch<SetStateAction<Tier | null>>;
}

export function SubscriptionTier({
  tier,
  selectedTier,
  setSelectedTier,
}: SubscriptionTierProps) {
  const isSelected = selectedTier?.id === tier.id;
  return (
    <label
      htmlFor={`tier-${tier.id}`}
      onClick={() => setSelectedTier(tier)}
      className={`rounded-xl border-2 p-6 cursor-pointer transition-all duration-200 flex flex-col ${
        isSelected
          ? `shadow-lg scale-[1.02] ${selectedTierColor(selectedTier.id)}`
          : `border-gray-200 ${tierColorOnHover(tier.id)}`
      }`}
    >
      <input
        type="radio"
        id={`tier-${tier.id}`}
        name="subscriptionTier"
        value={tier.id}
        className="sr-only"
        checked={isSelected}
        onChange={() => setSelectedTier(tier)}
      />
      <SubscriptionTierHeader tier={tier} />
      <SubscriptionTierFeatures tier={tier} />
      <SubscriptionTierSelectBtn selectedTier={selectedTier} tier={tier} />
    </label>
  );
}
