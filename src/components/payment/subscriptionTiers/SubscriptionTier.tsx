import { selectedTierColor, tierColorOnHover } from "@/utils/utilites";
import { SubscriptionTierHeader } from "./SubscriptionTierHeader";
import { SubscriptionTierFeatures } from "./SubscriptionTierFeatures";
import { SubscriptionTierSelectBtn } from "./SubscriptionTierSelectBtn";
import { Dispatch, SetStateAction } from "react";
import { Tier } from "@/utils/constants";

interface SubscriptionTierProps {
  tier: Tier;
  selectedTier: Tier | null;
  setSelectedTier: Dispatch<SetStateAction<Tier | null>>;
  disabled?: boolean;
  isCurrentPlan?: boolean;
}

export function SubscriptionTier({
  tier,
  selectedTier,
  setSelectedTier,
  disabled = false,
  isCurrentPlan = false,
}: SubscriptionTierProps) {
  const isSelected = selectedTier?.id === tier.id;

  return (
    <label
      htmlFor={`tier-${tier.id}`}
      onClick={() => !disabled && setSelectedTier(tier)}
      className={`rounded-xl border-2 p-6 transition-all duration-200 flex flex-col ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "cursor-pointer hover:shadow-md"
      } ${
        isSelected
          ? `shadow-lg scale-[1.02] ${selectedTierColor(tier.id)}`
          : "border-gray-200"
      } ${!disabled && tierColorOnHover(tier.id)}`}
    >
      <input
        type="radio"
        id={`tier-${tier.id}`}
        name="subscriptionTier"
        value={tier.id}
        className="sr-only"
        checked={isSelected}
        disabled={disabled}
        onChange={() => !disabled && setSelectedTier(tier)}
      />

      {isCurrentPlan && (
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded self-end">
          CURRENT
        </span>
      )}

      <SubscriptionTierHeader tier={tier} />
      <SubscriptionTierFeatures tier={tier} />
      <SubscriptionTierSelectBtn
        selectedTier={selectedTier}
        tier={tier}
        disabled={disabled}
      />
    </label>
  );
}
