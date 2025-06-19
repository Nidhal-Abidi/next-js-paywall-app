import { Tier } from "@/utils/constants";
import { tierPriceColor } from "@/utils/utilites";

interface SubscriptionTierHeaderProps {
  tier: Tier;
}

export function SubscriptionTierHeader({ tier }: SubscriptionTierHeaderProps) {
  return (
    <div className="flex justify-between items-start">
      <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
      <span className={`text-2xl font-extrabold ${tierPriceColor(tier.id)}`}>
        {tier.price}
      </span>
    </div>
  );
}
