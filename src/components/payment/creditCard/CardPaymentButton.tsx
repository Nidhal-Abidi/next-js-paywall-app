import { Tier } from "@/utils/constants";
import { paymentButtonColor } from "@/utils/utilites";

interface CardPaymentButtonProps {
  selectedTier: Tier;
}

export function CardPaymentButton({ selectedTier }: CardPaymentButtonProps) {
  return (
    <button
      type="submit"
      className={`${paymentButtonColor(
        selectedTier.id
      )} text-white font-bold mt-8  px-8 py-3 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors shadow-lg `}
    >
      Pay {selectedTier.price} Now
    </button>
  );
}
