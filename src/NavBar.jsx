import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingBag } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="text-[17px] px-[180px] Jost py-[24px] bg-white flex justify-between items-center">
      {/* Logo */}
      <div>
        <h1 className="text-[36px] font-semibold ">
          Jewelry <span className="text-[#C8815F]">.</span>
        </h1>
      </div>
      {/* Navs */}
      <div>
        <ul className="flex gap-[32px] ">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Pages</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Elements</li>
        </ul>
      </div>
      {/* Icons */}
      <div className="flex gap-[24px]">
        <IoSearch className="text-[24px] cursor-pointer" />
        <CgProfile className="text-[24px] cursor-pointer" />
        <FaRegHeart className="text-[24px] cursor-pointer" />
        <MdOutlineShoppingBag className="text-[24px] cursor-pointer" />
      </div>
    </div>
  );
};

export default NavBar;
