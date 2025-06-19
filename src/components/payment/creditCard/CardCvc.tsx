import { ChangeEvent, useState } from "react";

export function CardCvc() {
  const [cvc, setCvc] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // strip non‑digits and cap at 4 chars
    const digits = e.target.value.replace(/\D/g, "").slice(0, 4);
    setCvc(digits);
  };

  // validation: CVC should be 3 or 4 digits
  const len = cvc.length;
  const isValid = len === 3 || len === 4;
  const showError = len > 0 && !isValid;

  return (
    <div className="md:col-span-1">
      <label
        htmlFor="cvc"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        CVC
      </label>
      <input
        id="cvc"
        name="cvc"
        type="text"
        inputMode="numeric"
        placeholder="123"
        maxLength={4}
        value={cvc}
        onChange={handleChange}
        required
        className={`w-full px-4 py-3 border rounded-lg ${
          showError
            ? "border-red-500 focus:border-red-500"
            : isValid
            ? "border-green-500 focus:border-green-500"
            : "border-gray-300 focus:border-blue-500"
        }`}
      />
      {showError && (
        <p className="mt-1 text-sm text-red-600">
          CVC must be 3 or 4 digits ({len}/4)
        </p>
      )}
      {isValid && <p className="mt-1 text-sm text-green-600">✓ Valid CVC</p>}
    </div>
  );
}
