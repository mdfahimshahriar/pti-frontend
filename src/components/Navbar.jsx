import { React, useState } from "react";

import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoPersonCircle } from "react-icons/io5";

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);
  return (
    <div className="flex justify-around items-center">
      <div>
        <h1 className="font-bold text-3xl">pti.</h1>
      </div>

      <div className="flex justify-between items-center gap-3">
        <div className="relative w-[450px]">
          <CiSearch className="text-orange-300 absolute left-1 top-1/2 transform -translate-y-1/2 text-3xl" />
          <input
            type="text"
            placeholder="Search Audiobook"
            className="pl-10 pr-3 py-3 rounded-md w-full"
          />
        </div>
        <div
          className="flex justify-between items-center bg-white p-3 rounded-md w-[140px] relative"
          onClick={toggleDropdown}
        >
          <span className="font-bold mr-7">Menu</span>
          <RiArrowDropDownLine className="text-orange-300 text-2xl" />
          {isDropdownVisible && (
            <div className="absolute mt-[250px] right-0 bg-white shadow-md rounded-md">
              <ul className="text-gray-700">
                <li className="px-4 py-1 hover:bg-gray-100 hover:text-orange-600">Home</li>
                <li className="px-4 py-1 hover:bg-gray-100 hover:text-orange-600">Details</li>
                <li className="px-4 py-1 hover:bg-gray-100 hover:text-orange-600">Category</li>
                <li className="px-4 py-1 hover:bg-gray-100 hover:text-orange-600">My Favorites</li>
                <li className="px-4 py-1 hover:bg-gray-100 hover:text-orange-600">Profile</li>
                <li className="px-4 py-1 hover:bg-gray-100 hover:text-orange-600">Log In/Sign up</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div>
        <IoPersonCircle className="text-orange-600 text-[50px]" />
      </div>
    </div>
  );
};

export default Navbar;
