"use client";
import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { convertToSubCurrency } from "@/utils/utilites";
import { useSubscription } from "@/hooks/useSubscription";

export default function CheckoutPage({ amount }: { amount: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>();
  const [loading, setLoading] = useState(false);
  const { updateSubscription } = useSubscription();

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: convertToSubCurrency(amount) }),
    })
      .then((r) => r.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((e) => setErrorMessage(e.message));
  }, [amount]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);

    // submit the payment element
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    // confirm without forcing a full redirect
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/payment`,
      },
      redirect: "if_required",
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
      return;
    }

    // if we have a succeeded PaymentIntent, mark subscription
    if (paymentIntent?.status === "succeeded") {
      const ok = await updateSubscription();
      if (!ok) {
        setErrorMessage(
          "Failed to activate your subscription. Please contact support."
        );
      }
    }

    setLoading(false);
  };

  if (!clientSecret) {
    return <div>Loading payment form…</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      <button
        disabled={!stripe || loading}
        className="text-white w-full p-5 bg-black mt-2 cursor-pointer rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
      >
        {loading ? "Processing…" : `Pay €${amount}`}
      </button>
    </form>
  );
}
