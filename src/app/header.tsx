import React from "react";
import CreateSet from "./create-set/cteateSet";
import { UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <div className="flex justify-between p-5 bg-white">
      <div className="flex gap-4 justify-center items-center">
        <span>Logo</span>
        <a href="#">Home</a>

        <span>Your library</span>
        <a href="#">Expert Solutions</a>
      </div>
      <div className="h-15 relative w-[800px] flex justify-between border-[1px] rounded-full bg-white">
        <span className="m-3">
          <i className="fa-solid fa-magnifying-glass flex "></i>
        </span>
        <input
          className="w-[750px] border-none rounded-full"
          type="text"
          placeholder="Search for a question"
        />
      </div>
      <div className="flex gap-4">
        <span className="border-none border-slate-300 w-8 h-8 rounded-full relative bg-[#4255ff]">
          <i className="fa-solid fa-plus absolute right-[8px] top-[7px] text-white"></i>
        </span>
        <span className="border-[1px] border-[#333] w-8 h-8 rounded-full relative">
          <i className="fa-regular fa-bell absolute right-[8px] top-[6px]"></i>
        </span>
        <span>
          {" "}
          <UserButton />
        </span>
      </div>
    </div>
  );
}

export default Header;
