"use client";

import React from "react";
import { Button } from "../ui/button";
import { MdFlutterDash } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className="w-screen h-max p-4 flex justify-between items-center border-b-2 border-slate-100">
      {/* icon-title */}
      <h1 className="text-4xl flex items-center cursor-pointer max-[640px]:text-2xl transition-all">
        <MdFlutterDash size={50} />
        WhatBytes
      </h1>

      {/* button */}
      <Button
        variant="secondary"
        className={
          "bg-white border-2 border-slate-200 text-black py-5 cursor-pointer max-[640px]:text-[12px] max-[640px]:p-2 mr-2"
        }
      >
        {" "}
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            className={""}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>{" "}
        <span className="max-[340px]:hidden">Gaurav</span>
      </Button>
    </div>
  );
};

export default Navbar;
