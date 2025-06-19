"use client";

import { Tier } from "@/utils/constants";
import { paymentButtonColor, tierPriceColor } from "@/utils/utilites";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";

type CardDetails = {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
};

interface CreditCardProps {
  selectedTier: Tier | null;
  setSelectedTier: Dispatch<SetStateAction<Tier | null>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  cardDetails: CardDetails;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function CreditCard({
  selectedTier,
  setSelectedTier,
  handleSubmit,
  cardDetails,
  handleInputChange,
}: CreditCardProps) {
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

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="number"
                  placeholder="4242 4242 4242 4242"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={cardDetails.number}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="expiry"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={cardDetails.expiry}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="cvc"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  name="cvc"
                  placeholder="123"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={cardDetails.cvc}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="cardName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name on Card
                </label>
                <input
                  type="text"
                  id="cardName"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={cardDetails.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
              <button
                type="button"
                onClick={() => setSelectedTier(null)}
                className="px-5 py-3 text-gray-600 hover:text-gray-800 font-medium mb-3 sm:mb-0 cursor-pointer"
              >
                ← Choose different plan
              </button>
              <button
                type="submit"
                className={`${paymentButtonColor(
                  selectedTier.id
                )}  text-white font-bold px-8 py-3 rounded-lg cursor-pointer  focus:outline-none focus:ring-2 focus:ring-offset-2  transition-colors shadow-lg`}
              >
                Pay {selectedTier.price} Now
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
