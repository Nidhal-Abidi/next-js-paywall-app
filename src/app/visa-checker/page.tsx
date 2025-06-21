"use client";

import { useState } from "react";
import { VisaCheckerForm } from "@/components/visa-checker/VisaCheckerForm";
import { VisaCheckerResult } from "@/components/visa-checker/VisaCheckerResult";

export default function VisaChecker() {
  const [requirements, setRequirements] = useState("");
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md border border-gray-200 rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Visa Checker</h1>
        <VisaCheckerForm
          setRequirements={setRequirements}
          setShowResult={setShowResult}
        />
        <VisaCheckerResult
          requirements={requirements}
          showResult={showResult}
        />
      </div>
    </div>
  );
}
