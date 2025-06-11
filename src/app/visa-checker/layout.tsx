import Navbar from "@/components/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa Checker",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
