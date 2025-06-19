import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SignOut } from "./SignOut";
import { NavItem } from "./NavItem";

export default async function Navbar() {
  const session = await auth();
  if (!session) redirect("/login");
  const hasSubscription = session.user?.subscription ? true : false;

  const links = [
    { url: "/dashboard", routeName: "Dashboard", isActive: true },
    { url: "/visa-checker", routeName: "Visa Checker", isActive: true },
    { url: "/payment", routeName: "Pay", isActive: true },
    {
      url: "/premium/document-templates",
      routeName: "Document Templates",
      isActive: hasSubscription,
    },
    {
      url: "/premium/consultation-booking",
      routeName: "Book a Consultation",
      isActive: hasSubscription,
    },
  ];

  return (
    <nav className="w-full bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <ul className="flex items-center flex-wrap gap-1">
          {links.map((link, idx) => (
            <NavItem {...link} key={idx} />
          ))}
          <li className="ml-auto">
            <SignOut />
          </li>
        </ul>
      </div>
    </nav>
  );
}
