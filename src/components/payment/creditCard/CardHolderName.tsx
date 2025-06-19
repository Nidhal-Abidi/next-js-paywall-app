import { useState } from "react";

export function CardHolderName() {
  const [name, setName] = useState("");

  // validation: at least two words (first + last name)
  const trimmed = name.trim();
  const isValid = /^[A-Za-z]+ +[A-Za-z]+$/.test(trimmed);
  const showError = name.length > 0 && !isValid;

  return (
    <div className="md:col-span-2">
      <label
        htmlFor="cardName"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Credit Card Holder
      </label>
      <input
        id="cardName"
        name="cardHolderName"
        type="text"
        placeholder="John Doe"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className={`w-full px-4 py-3 border rounded-lg ${
          showError
            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
            : isValid
            ? "border-green-500 focus:border-green-500 focus:ring-green-500"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        }`}
      />
      {showError && (
        <p className="mt-1 text-sm text-red-600">
          You must include your First and Last name (letters only)!
        </p>
      )}
      {isValid && <p className="mt-1 text-sm text-green-600">✓ Looks good</p>}
    </div>
  );
}
