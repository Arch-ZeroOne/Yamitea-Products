import React from "react";

function Navbar() {
  return (
    <div className="flex items-center flex-col p-3 justify-between gap-4 sm:flex-row cursor-pointer">
      <Logo />
      <Links />
      <Searchbar />
    </div>
  );
}

function Links() {
  return (
    <div className="flex  items-center gap-5 list-none text-sm flex-col sm:flex-row">
      <li className="hover:underline">Popular</li>
      <li className="hover:underline">All products</li>
    </div>
  );
}

function Searchbar() {
  return (
    <div className="border border-gray-200 p-2 rounded-md ">
      <input
        type="text"
        placeholder="Search for products"
        className="  w-sm  rounded text-[15px] outline-0"
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center ">
      <img src="public/shopping-bag.png" alt="shopping-bag" className="h-10" />
      <h2 className="font-bold text-m font-mono">Yamitea Store</h2>
    </div>
  );
}

export default Navbar;
