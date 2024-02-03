"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NavItem } from "@/types";
import { usePathname } from "next/navigation";

const NavItem = ({ Icon, label, link }: NavItem) => {
  const path = usePathname();
  const [active, setActive] = useState("/");

  useEffect(() => {
    setActive(path);
  }, [path]);

  return (
    <Link href={link}>
      <Icon
        className={`text-3xl ${
          path === link ? `text-primary-100` : "text-primary-400"
        }`}
      />
      <p className="hidden">{label}</p>
    </Link>
  );
};

export default NavItem;
