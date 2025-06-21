import { AppointmentsBookingTips } from "@/components/embassy-hub/AppointmentsBookingTips";
import { EmbassyLocations } from "@/components/embassy-hub/EmbassyLocations";
import { Header } from "@/components/embassy-hub/Header";
import { ProcessingTimes } from "@/components/embassy-hub/ProcessingTimes";
import { requireSubscription } from "@/lib/auth-utils";
import React from "react";

export default async function EmbassyHub() {
  await requireSubscription("SILVER");
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Header />
        <EmbassyLocations />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <AppointmentsBookingTips />
          <ProcessingTimes />
        </div>
      </div>
    </div>
  );
}
