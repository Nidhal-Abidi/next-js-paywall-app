"use client";

import { useState } from "react";
import Link from "next/link";

export default function VisaChecker() {
  const [visaType, setVisaType] = useState("student");
  const [requirements, setRequirements] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);

    // Simple visa requirement explanations
    const requirementMap: Record<string, string> = {
      student: "University acceptance + €11,000 proof + Health insurance",
      "job-offer": "Job offer + Qualification recognition + Work contract",
      freelance: "Portfolio of clients + €5,000 savings + Business plan",
    };

    setRequirements(
      requirementMap[visaType] || "Please select a valid visa type"
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md border border-gray-200 rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Visa Checker</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="visaType"
              className="block mb-2 text-sm font-medium"
            >
              Visa Type
            </label>
            <select
              id="visaType"
              value={visaType}
              onChange={(e) => setVisaType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            >
              <option value="student">Student Visa</option>
              <option value="job-offer">Work Visa (Job Offer)</option>
              <option value="freelance">Freelance Visa</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md cursor-pointer font-medium hover:bg-gray-800 transition duration-200"
          >
            Check Requirements
          </button>
        </form>

        {showResult && (
          <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-md">
            <h2 className="text-xl font-semibold mb-2">Basic Requirements:</h2>
            <p className="mb-4">{requirements}</p>
            <Link
              href="/payment"
              className="inline-block bg-black text-white py-3 px-4 rounded-md cursor-pointer font-medium hover:bg-gray-800 transition duration-200"
            >
              Want a detailed guide? Upgrade to premium!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
