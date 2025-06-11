"use client";

import CheckoutPage from "@/components/CheckoutPage";
import { convertToSubCurrency } from "@/utils/utilites";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined!");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function CheckoutPageWrapper() {
  const amount = 5.55;
  return (
    <>
      <h1>Stripe payment</h1>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubCurrency(amount),
          currency: "eur",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </>
  );
}
