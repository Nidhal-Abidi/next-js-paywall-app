export function CreditCardErrors({ errors }: { errors: string[] }) {
  return (
    <>
      {errors.length > 0 && (
        <div className="mt-4 p-4 border border-red-500 rounded-lg bg-red-50">
          <p className="font-medium text-red-700">Please fix the following:</p>
          <ul className="list-disc list-inside text-red-600">
            {errors.map((err, i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
