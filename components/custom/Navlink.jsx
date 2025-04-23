// components/NavLink.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx"; // optional for className handling

const NavLink = ({ href, children }) => {
  // get current path name
  const pathname = usePathname();

  //   check that path is correct or not
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "px-4 py-2 transition-colors rounded-[10px] flex items-center cursor-pointer gap-2",
        isActive ? "bg-slate-300 font-bold" : "text-gray-600"
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;



