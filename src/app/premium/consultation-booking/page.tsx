"use client";

import { useState } from "react";

export default function ConsultationBooking() {
  const [consultationType, setConsultationType] = useState("document-review");
  const [dateTime, setDateTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [bookedDetails, setBookedDetails] = useState<{
    consultationType: string;
    dateTime: string;
  } | null>(null);

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

  const formatConsultationType = (type: string) => {
    switch (type) {
      case "document-review":
        return "Document Review";
      case "visa-application-guidance":
        return "Visa Application Guidance";
      case "interview-preparation":
        return "Interview Preparation";
      default:
        return type;
    }
  };

  const formatDateTime = (dateTimeString: string) => {
    try {
      const date = new Date(dateTimeString);
      return date.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    } catch (error) {
      return dateTimeString;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setBookedDetails({ consultationType, dateTime });
      setIsBooked(true);
    }, 1500);
  };

  const handleBookAnother = () => {
    setIsBooked(false);
    setBookedDetails(null);
    setConsultationType("document-review");
    setDateTime("");
  };

  // Calculate min datetime for input (current time + 1 day)
  const minDateTime = `${getMinDate()}T${getCurrentTime()}`;

  if (isBooked && bookedDetails) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
        <div className="w-full max-w-md border border-gray-200 rounded-lg shadow-sm p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold mb-4 text-green-600">
              Consultation Booked!
            </h1>
            <p className="text-gray-600 mb-6">
              Your consultation has been successfully scheduled.
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold mb-2">Booking Details:</h3>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Type:</strong>{" "}
                {formatConsultationType(bookedDetails.consultationType)}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Date & Time:</strong>{" "}
                {formatDateTime(bookedDetails.dateTime)}
              </p>
            </div>

            <button
              onClick={handleBookAnother}
              className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition duration-200"
            >
              Book Another Consultation
            </button>
          </div>
        </div>
      </div>
    );
  }

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
