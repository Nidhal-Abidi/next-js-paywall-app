import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Login/Register",
  description: "Login or Register",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
