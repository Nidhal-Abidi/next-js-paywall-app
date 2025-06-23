import { Tier } from "@/utils/constants";
import { paymentButtonColor } from "@/utils/utilites";
import { useFormStatus } from "react-dom";

interface CardPaymentButtonProps {
  selectedTier: Tier;
}

export function CardPaymentButton({ selectedTier }: CardPaymentButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${paymentButtonColor(
        selectedTier.id
      )}  text-white font-bold mt-8 px-8 py-3 rounded-lg cursor-pointer transition-colors shadow-lg ${
        pending
          ? "bg-gray-300 text-gray-600 cursor-not-allowed shadow-none"
          : "hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
      }`}
    >
      {pending ? "Paying ..." : `Pay ${selectedTier.price} Now`}
    </button>
  );
}
