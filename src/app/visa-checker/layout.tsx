import Navbar from "@/components/navbar/NavBar";
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Visa Checker",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <SessionProvider>{children}</SessionProvider>
    </>
  );
}
