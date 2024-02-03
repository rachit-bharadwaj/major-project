"use client";

import Link from "next/link";
import { NavItem } from "@/types";
import { usePathname } from "next/navigation";

const NavItem = ({ Icon, label, link }: NavItem) => {
  const path = usePathname();

  return (
    <Link href={link}>
      <Icon
        className={`text-3xl ${
          path === link ? `text-primary-100` : "text-primary-300"
        }`}
      />
      <p className="hidden">{label}</p>
    </Link>
  );
};

export default NavItem;
