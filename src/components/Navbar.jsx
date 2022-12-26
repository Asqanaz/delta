import React from "react";
import { Searchbar } from "./Searchbar";
import { RiUser3Line } from "react-icons/ri";
import { BsCartDash } from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";

export const Navbar = () => {
  return (
    <nav className="min-h-[90px] w-full navbar">
      <div className="flex items-center justify-between gap-20 container mx-auto p-8">
        <div className="p-3 bg-searchBar rounded-xl">
          <BiMenuAltLeft size="48" />
        </div>
        <Searchbar />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <RiUser3Line />
            <span className="text-heading text-md font-bold">
              Sign Up/Sign In
            </span>
          </div>
          <div className="border h-[24px] border-heading" />
          <div className="flex items-center gap-2">
            <BsCartDash />
            <span className="text-heading text-md font-bold">Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
