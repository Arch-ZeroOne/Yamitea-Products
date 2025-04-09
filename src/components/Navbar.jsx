import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import logo from "../assets/images/shopping-bag.png";
import HamburgerMenu from "./Menu/HamburgerMenu";
import { useSearchHistory } from "./ContextProvider/ContextProvider";
function Navbar() {
  const breakpoint = window.matchMedia("(max-width:700px)");

  useEffect(() => {
    console.log(breakpoint);
  }, [breakpoint]);
  return (
    <div className="flex items-center flex-col p-3  gap-5 cursor-pointer md:flex-row ">
      <Logo />
      {breakpoint.matches === true ? <HamburgerMenu /> : <Navbar />}
      <Searchbar />
    </div>
  );
}

function Links() {
  return (
    <div className="flex  items-center justify-around gap-5  list-none text-sm flex-col sm:flex-row sm:gap-10 sm:text-center  md:gap-5  lg:gap-20  w-[50%]">
      <Link to="/">
        <li className="hover:underline underline-offset-8">Products</li>
      </Link>
      <Link to="/menclothing">
        <li className="hover:underline underline-offset-8">Clothing</li>
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
  const { setValue } = useSearchHistory();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="border border-gray-200 p-2 rounded-md flex items-center sm:w-[40%] justify-between ">
      <input
        type="text"
        placeholder="Search for a product...."
        className="  w-sm  rounded text-sm outline-0 sm:w-xsm md:text-sm md:p-1 md:w-xs "
        onChange={handleChange}
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center w-[10%] gap-2">
      <img src={logo} alt="shopping-bag" className="h-10" />
      <h2 className="font-semibold  text-sm lg:text-center  ">MyStore</h2>
    </div>
  );
}

export default Navbar;
