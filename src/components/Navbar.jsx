import React from "react";
import { Link } from "react-router";
function Navbar() {
  return (
    <div className="flex items-center flex-col p-3 justify-between gap-4 sm:gap-10 cursor-pointer md:flex-row">
      <Logo />
      <Links />
      <Searchbar />
    </div>
  );
}

function Links() {
  return (
    <div className="flex  items-center gap-8 list-none text-sm flex-col sm:flex-row sm:gap-10 sm:text-xs sm:text-center  md:gap-5  lg:text-sm">
      <Link to="/">
        <li className="hover:underline underline-offset-8">All products</li>
      </Link>
      <Link to="/menclothing">
        <li className="hover:underline underline-offset-8">Mens Clothing</li>
      </Link>
      <Link to="/womenclothing">
        <li className="hover:underline underline-offset-8">Womens Clothing</li>
      </Link>
      <Link to="/electronics">
        <li className="hover:underline underline-offset-8">Electronics</li>
      </Link>
      <Link to="/jewelry">
        <li className="hover:underline underline-offset-8">Jewelry</li>
      </Link>
    </div>
  );
}

function Searchbar() {
  return (
    <div className="border border-gray-200 p-2 rounded-md flex">
      <input
        type="text"
        placeholder="Search for a product...."
        className="  w-sm  rounded text-sm outline-0 sm:w-xs md:text-xs md:w-xs"
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center sm:text-sm md:text-center ">
      <img
        src="/src/assets/images/shopping-bag.png"
        alt="shopping-bag"
        className="h-10"
      />
      <h2 className="font-medium text-m ">Yamitea Store</h2>
    </div>
  );
}

export default Navbar;
