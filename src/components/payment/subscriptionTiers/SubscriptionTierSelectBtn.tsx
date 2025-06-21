import { Tier } from "@/utils/constants";
import { selectedButtonBgColor } from "@/utils/utilites";

interface SubscriptionTierSelectBtnProps {
  tier: Tier;
  selectedTier: Tier | null;
  disabled?: boolean;
}

export function SubscriptionTierSelectBtn({
  selectedTier,
  tier,
  disabled,
}: SubscriptionTierSelectBtnProps) {
  const isSelected = selectedTier?.id === tier.id;

  return (
    <div className="mt-6 text-center">
      <div
        className={`inline-block px-4 py-2 rounded-full text-sm font-medium border 
          ${
            disabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : isSelected
              ? `text-white ${selectedButtonBgColor(selectedTier.id)}`
              : "bg-gray-100 text-gray-700"
          }`}
      >
        {disabled ? "Not Available" : isSelected ? "Selected" : "Select"}
      </div>
    </div>
  );
}
