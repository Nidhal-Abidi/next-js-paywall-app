import { useState, useEffect } from "react";

export function CardExpirationDate() {
  const [month, setMonth] = useState("06");
  const [year, setYear] = useState("2025");
  const [validMonths, setValidMonths] = useState<string[]>([]);

  // Generate years starting from 2025 to 2035
  const years = Array.from({ length: 11 }, (_, i) => (2025 + i).toString());

  // Generate valid months based on selected year
  useEffect(() => {
    if (year === "2025") {
      // For 2025, only months from June (06) to December
      setValidMonths(
        Array.from({ length: 7 }, (_, i) => (i + 6).toString().padStart(2, "0"))
      );
      if (parseInt(month) < 6) setMonth("06");
    } else {
      // For later years, all months
      setValidMonths(
        Array.from({ length: 12 }, (_, i) =>
          (i + 1).toString().padStart(2, "0")
        )
      );
    }
  }, [year, month]);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Expiration Date
      </label>
      <div className="flex space-x-3">
        <div className="relative flex-1">
          <select
            value={month}
            name="expirationMonth"
            onChange={(e) => setMonth(e.target.value)}
            className="w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-md shadow-sm appearance-none"
          >
            {validMonths.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 ">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="relative flex-1">
          <select
            value={year}
            name="expirationYear"
            onChange={(e) => setYear(e.target.value)}
            className="w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-md shadow-sm appearance-none"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
