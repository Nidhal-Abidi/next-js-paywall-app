import { ChangeEvent, useState } from "react";

export function CardNumber() {
  const [number, setNumber] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // strip out anything but digits and spaces
    let cleaned = e.target.value.replace(/[^0-9 ]/g, "");

    // count digits (ignore spaces)
    const digitsOnly = cleaned.replace(/\s/g, "");

    // trim to max 16 digits
    if (digitsOnly.length > 16) {
      cleaned = digitsOnly.slice(0, 16);
    } else {
      cleaned = digitsOnly;
    }

    setNumber(cleaned);
  };

  // validation
  const digitCount = number.length;
  const isComplete = digitCount === 16;
  const showError = digitCount > 0 && !isComplete;

  return (
    <div className="md:col-span-2">
      <label
        htmlFor="cardNumber"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Card Number
      </label>
      <input
        id="cardNumber"
        name="cardNumber"
        type="text"
        inputMode="numeric"
        placeholder="4242 4242 4242 4242"
        maxLength={16}
        className={`w-full px-4 py-3 border rounded-lg ${
          showError
            ? "border-red-500 focus:border-red-500"
            : isComplete
            ? "border-green-500 focus:border-green-500"
            : "border-gray-300 focus:border-blue-500"
        }`}
        value={number}
        onChange={handleChange}
        required
      />
      {showError && (
        <p className="mt-1 text-sm text-red-600">
          Please enter exactly 16 digits ({digitCount}/16)
        </p>
      )}
      {isComplete && <p className="mt-1 text-sm text-green-600">✓ Complete</p>}
    </div>
  );
}
