"use client";

import Link from "next/link";

import { NavItem } from "@/templates/shared";

// icons
import { CgFeed } from "react-icons/cg";
import { LuSearch } from "react-icons/lu";
import { HiOutlineBell, HiOutlineUser } from "react-icons/hi2";
import { HiPlusSm } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 w-full flex justify-between items-center p-3 bg-glass z-50 rounded-t-2xl">
      <NavItem Icon={CgFeed} label="Home" link="/" />
      <NavItem Icon={LuSearch} label="Search" link="/search" />

      <Link href="/create" className="bg-gradient rounded-full p-1">
        <HiPlusSm className="text-5xl" />
        <p className="hidden">Create</p>
      </Link>

      <NavItem
        Icon={HiOutlineBell}
        label="Notifications"
        link="/notifications"
      />

      <NavItem Icon={HiOutlineUser} label="Profile" link="/profile" />
    </nav>
  );
};

export default Navbar;
