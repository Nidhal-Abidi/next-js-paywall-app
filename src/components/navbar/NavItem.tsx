import Link from "next/link";

export function NavItem({
  url,
  routeName,
  isActive = false,
}: {
  url: string;
  routeName: string;
  isActive: boolean;
}) {
  return (
    <li>
      <Link
        href={url}
        className={`text-gray-700 px-3 py-2 sm:px-4 sm:py-3 rounded transition duration-200 inline-block ${
          isActive
            ? "hover:text-white hover:bg-gray-500"
            : "hover:text-orange-800 hover:bg-orange-300"
        }`}
      >
        {routeName}
        {!isActive && (
          <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 ml-1.5 rounded-full font-medium">
            Pro
          </span>
        )}
      </Link>
    </li>
  );
}
