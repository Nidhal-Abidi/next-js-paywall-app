import Navbar from "@/components/navbar/NavBar";
import { auth } from "@/lib/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard ",
};

export default async function Dashboard() {
  const session = await auth();
  if (!session) redirect("/login");
  const userName = session.user?.name
    ? session.user?.name
    : `${session.user?.firstName} ${session.user?.lastName}`;

  return (
    <>
      <Navbar />
      <div className="text-center">
        <div className="mb-4 p-16 ">
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
      </div>
    </>
  );
}
