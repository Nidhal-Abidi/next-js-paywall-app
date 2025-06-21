interface SupportMemberProps {
  person: {
    id: number;
    name: string;
    role: string;
    email: string;
    phone: string;
    availability: string;
    bio: string;
  };
}

export function SupportMember({ person }: SupportMemberProps) {
  return (
    <div
      key={person.id}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
    >
      <div className="p-6">
        <div className="flex items-start">
          <div className="ml-4">
            <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
            <p className="text-indigo-600 font-medium">{person.role}</p>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <div className="flex items-center text-gray-600">
            <svg
              className="h-5 w-5 mr-2 text-indigo-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a href={`mailto:${person.email}`} className="hover:underline">
              {person.email}
            </a>
          </div>

          <div className="flex items-center text-gray-600">
            <svg
              className="h-5 w-5 mr-2 text-indigo-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <a href={`tel:${person.phone}`} className="hover:underline">
              {person.phone}
            </a>
          </div>

          <div className="flex items-start text-gray-600">
            <svg
              className="h-5 w-5 mr-2 text-indigo-500 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span>{person.availability}</span>
          </div>
        </div>

        <p className="mt-4 text-gray-700 text-sm italic">{person.bio}</p>
      </div>
    </div>
  );
}
