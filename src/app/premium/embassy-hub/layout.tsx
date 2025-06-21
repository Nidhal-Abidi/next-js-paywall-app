import Navbar from "@/components/navbar/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Embassy Hub",
  description: "Complete information about embassies",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <>{children}</>
    </>
  );
}
