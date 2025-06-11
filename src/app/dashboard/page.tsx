import Navbar from "@/components/NavBar";
import { auth } from "@/lib/auth";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard ",
};

export default async function Dashboard() {
  const session = await auth();
  if (!session) redirect("/login");
  console.log(session);
  const userName = session.user?.name
    ? session.user?.name
    : `${session.user?.first_name} ${session.user?.last_name}`;

  return (
    <>
      <Navbar />
      <div className="text-center">
        <div className="mb-4 p-16 border-gray-400 border-b">
          <h1 className="text-xl font-bold mb-4 tracking-tight">
            Look who is back,{" "}
            <span className="underline decoration-wavy bg-gray-100 p-2 rounded italic">
              {userName}
            </span>
            !
          </h1>
          <p className="text-xl text-gray-700">
            Logged in with{" "}
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">
              {session.user?.email}
            </span>
          </p>
        </div>

        <p className="text-lg mb-8">Ready to enhance your journey?</p>
        <Link
          href="/premium"
          className="
                inline-block 
                px-8 py-4 
                border-2 border-black 
                hover:bg-black hover:text-white
                transition-all duration-300
                 font-semibold
              "
        >
          Explore Premium Features →
        </Link>
      </div>
    </>
  );
}
