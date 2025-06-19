"use client";

import { Dispatch, SetStateAction, useState } from "react";

interface VisaCheckerFormProps {
  setRequirements: Dispatch<SetStateAction<string>>;
  setShowResult: Dispatch<SetStateAction<boolean>>;
}

export function VisaCheckerForm({
  setRequirements,
  setShowResult,
}: VisaCheckerFormProps) {
  const [visaType, setVisaType] = useState("student");

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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="visaType" className="block mb-2 text-sm font-medium">
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
  );
}
