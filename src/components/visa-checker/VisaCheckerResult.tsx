import Link from "next/link";

interface VisaCheckerResultProps {
  showResult: boolean;
  requirements: string;
}

export function VisaCheckerResult({
  showResult,
  requirements,
}: VisaCheckerResultProps) {
  return (
    <>
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
    </>
  );
}
