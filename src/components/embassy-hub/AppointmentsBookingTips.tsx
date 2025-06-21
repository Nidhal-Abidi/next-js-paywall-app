import { bookingTips } from "@/utils/constants";

export function AppointmentsBookingTips() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <div className="bg-indigo-100 p-3 rounded-lg mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-indigo-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          Appointment Booking Tips
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bookingTips.map((tip) => (
          <div
            key={tip.id}
            className="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 transition-colors cursor-pointer"
          >
            <div className="flex items-start">
              <span className="text-2xl mr-3">{tip.icon}</span>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">
                  {tip.title}
                </h3>
                <p className="text-gray-700 text-sm">{tip.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
