"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ConsultationBooking() {
  const [consultationType, setConsultationType] = useState("document-review");
  const [dateTime, setDateTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Get tomorrow's date in YYYY-MM-DD format for min date
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  // Get current time in HH:MM format
  const getCurrentTime = () => {
    return new Date().toTimeString().substring(0, 5);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // console.log("Booking details:", { consultationType, dateTime });

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/premium/consultation-booking");
    }, 1500);
  };

  // Calculate min datetime for input (current time + 1 day)
  const minDateTime = `${getMinDate()}T${getCurrentTime()}`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md border border-gray-200 rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Book Consultation
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Schedule a personalized session with our visa experts
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="consultationType"
              className="block mb-2 text-sm font-medium"
            >
              Consultation Type
            </label>
            <select
              id="consultationType"
              value={consultationType}
              onChange={(e) => setConsultationType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            >
              <option value="document-review">Document Review</option>
              <option value="visa-application-guidance">
                Visa Application Guidance
              </option>
              <option value="interview-preparation">
                Interview Preparation
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="dateTime"
              className="block mb-2 text-sm font-medium"
            >
              Preferred Date & Time
            </label>
            <input
              type="datetime-local"
              id="dateTime"
              value={dateTime}
              min={minDateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Available from tomorrow onwards
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-black text-white py-3 rounded-md font-medium transition duration-200 ${
              isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-gray-800"
            }`}
          >
            {isSubmitting ? "Booking..." : "Schedule Consultation"}
          </button>
        </form>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <h3 className="font-semibold mb-2">Consultation Details:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 60-minute video session</li>
            <li>• Personalized advice from experts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
