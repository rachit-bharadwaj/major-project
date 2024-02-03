import { ReactNode } from "react";
import { Navbar } from "@/components/shared";
import "@/app/globals.css";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
