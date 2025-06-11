import { useState } from "react";
import { useRouter } from "next/navigation";

type SubscriptionResponse = {
  message: string;
  user: {
    id: string;
    has_subscription: boolean;
    name: string | null;
    email: string | null;
  };
};

type SubscriptionError = {
  error: string;
};

export const useSubscription = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const updateSubscription = async (): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/user/subscription", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data: SubscriptionResponse | SubscriptionError =
        await response.json();

      if (!response.ok) {
        const errorData = data as SubscriptionError;
        setError(errorData.error || "Failed to update subscription");
        return false;
      }

      // Refresh the page to get updated session data
      router.refresh();
      return true;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateSubscription,
    isLoading,
    error,
  };
};
