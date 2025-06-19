import { Tier } from "@/utils/constants";
import { selectedButtonBgColor } from "@/utils/utilites";

interface SubscriptionTierSelectBtnProps {
  tier: Tier;
  selectedTier: Tier | null;
}

export function SubscriptionTierSelectBtn({
  selectedTier,
  tier,
}: SubscriptionTierSelectBtnProps) {
  return (
    <div className="mt-6 text-center">
      <div
        className={`inline-block px-4 py-2 rounded-full text-sm font-medium border ${
          selectedTier?.id === tier.id
            ? `text-white ${selectedButtonBgColor(selectedTier.id)}`
            : "bg-gray-100 text-gray-700"
        }`}
      >
        {selectedTier?.id === tier.id ? "Selected" : "Select Plan"}
      </div>
    </div>
  );
}
