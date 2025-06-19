"use client";

import { Tier } from "@/utils/constants";
import { tierPriceColor } from "@/utils/utilites";
import { CardNumber } from "./CardNumber";
import { CardCvc } from "./CardCvc";
import { CardHolderName } from "./CardHolderName";
import { CardPaymentButton } from "./CardPaymentButton";
import { CardExpirationDate } from "./CardExpirationDate";

export type CardDetails = {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
};

interface CreditCardProps {
  selectedTier: Tier | null;
}

export function CreditCard({ selectedTier }: CreditCardProps) {
  return (
    <>
      {selectedTier && (
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Payment for{" "}
            <span className={tierPriceColor(selectedTier.id)}>
              {selectedTier.name}
            </span>{" "}
            Tier
          </h2>
          <p className="text-gray-600 mb-6">
            One-time payment of{" "}
            <span className={`font-bold ${tierPriceColor(selectedTier.id)}`}>
              {selectedTier.price}
            </span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CardNumber />

            <CardExpirationDate />

            <CardCvc />

            <CardHolderName />
          </div>

          <CardPaymentButton selectedTier={selectedTier} />
        </div>
      )}
    </>
  );
}
