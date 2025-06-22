import Navbar from "@/components/navbar/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Document Templates",
  description: "Ready-to-use templates for your German visa application",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <>{children}</>
    </>
  );
}
