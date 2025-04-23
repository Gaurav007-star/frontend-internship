"use client";

import React, { useState } from "react";
import NavLink from "./Navlink";
import { MdBarChart } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { PiNoteBlankLight } from "react-icons/pi";

import { MdDoubleArrow } from "react-icons/md";

const Leftbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-3xl text-white"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
       <MdDoubleArrow color="black" size={40}  className="top-[45vh] absolute left-[-25px] cursor-pointer z-50"/>
      </button>

      <div
        className={`
        fixed md:static top-0 left-0 z-40
        w-[200px] h-screen bg-slate-100 backdrop:blur-2xl flex flex-col items-center gap-4 py-6
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0 bg-slate-200 " : "-translate-x-full bg-white border-1 border-slate-100"}
        md:translate-x-0 md :flex
      `}
      >
        <NavLink href={"/dashboard"} className="flex items-center gap-2">
          <MdBarChart />
          Dashboard
        </NavLink>

        <NavLink href={"/skill"} className="flex items-center gap-2">
          <SlBadge />
          Skill Test
        </NavLink>

        <NavLink href={"/internship"} className="flex items-center gap-2">
          <PiNoteBlankLight />
          Internship
        </NavLink>
      </div>
    </>
  );
};

export default Leftbar;
