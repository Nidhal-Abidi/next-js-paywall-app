import { SupportMember } from "@/components/consultation-booking/SupportMember";
import { requireSubscription } from "@/lib/auth-utils";
import { supportTeam } from "@/utils/constants";

export default async function ConsultationBooking() {
  await requireSubscription("GOLD");
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-2">
          Visa Support Team
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Contact our specialists for personalized assistance with your German
          visa process
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supportTeam.map((person) => (
            <SupportMember key={person.id} person={person} />
          ))}
        </div>

        <div className="mt-12 bg-indigo-50 rounded-xl p-6 border border-indigo-100">
          <h2 className="text-xl font-bold text-indigo-800 mb-3">
            Need immediate assistance?
          </h2>
          <p className="text-gray-700">
            Our team responds to inquiries within 24 business hours. For urgent
            cases, contact Marko Schmidt directly or use our emergency hotline:
            <span className="font-semibold"> +49 30 5557890</span>
          </p>
        </div>
      </div>
    </div>
  );
}
