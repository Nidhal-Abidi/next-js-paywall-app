import { Tier } from "@/utils/constants";
import {
  selectedButtonBgColor,
  selectedTierColor,
  tierColorOnHover,
  tierPriceColor,
} from "@/utils/utilites";
import { Dispatch, SetStateAction } from "react";

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
      {tiers.map((tier) => (
        <div
          key={tier.id}
          onClick={() => setSelectedTier(tier)}
          className={`rounded-xl border-2 p-6 cursor-pointer transition-all duration-200 flex flex-col ${
            selectedTier?.id === tier.id
              ? `shadow-lg scale-[1.02] ${selectedTierColor(selectedTier.id)}`
              : `border-gray-200 ${tierColorOnHover(tier.id)}`
          }`}
        >
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
            <span
              className={`text-2xl font-extrabold ${tierPriceColor(tier.id)}`}
            >
              {tier.price}
            </span>
          </div>

          <ul className="mt-4 space-y-3 flex-grow">
            {tier.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

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
        </div>
      ))}
    </div>
  );
}
