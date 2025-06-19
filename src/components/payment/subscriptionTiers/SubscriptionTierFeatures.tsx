import { Tier } from "@/utils/constants";

interface SubscriptionTierFeaturesProps {
  tier: Tier;
}

export function SubscriptionTierFeatures({
  tier,
}: SubscriptionTierFeaturesProps) {
  return (
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
  );
}
