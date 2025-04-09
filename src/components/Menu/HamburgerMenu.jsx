import React from "react";

function HamburgerMenu() {
  return (
    <div className=" p-3 flex gap-3 flex-col border rounded-2xl ">
      <span className=" w-10 block  bg-black h-1"></span>
      <span className=" block h-1 bg-black"></span>
      <span className=" block h-1 bg-black"></span>
    </div>
  );
}

export default HamburgerMenu;
