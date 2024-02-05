import { ReactNode } from "react";
import { Navbar } from "@/components/shared";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
