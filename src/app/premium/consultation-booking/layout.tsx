import Navbar from "@/components/navbar/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <>{children}</>
    </>
  );
}
