import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  /*Logo Toggle */
  const [logo, setLogo] = useState(false);

  /* Mobile Menu Handler*/
  const handleMenu = () => {
    setNavBar(!navBar);
    setLogo(!logo);
  };

  return (
    <div onClick={handleMenu} className="flex justify-between items-center h-20 px-4 absolute z-10 w-full h-full">
      <div>
        <h1 className={ logo ? 'hidden' : 'block'}>Gwadar.</h1>
      </div>

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      {/* Search|Person icon START */}
      <div className="hidden md:flex md:px-2 text-white">
        <AiOutlineSearch className="mr-2" size={20} />
        <BsFillPersonFill size={20} />
      </div>
      {/* Search|Person icon END */}

      {/* Mobile Screen Icons Start */}
      <div onClick={handleMenu} className="md:hidden z-10">
        {navBar ?  <ImCancelCircle size={20} /> : <HiMenu size={20} />}
      </div>

      <div onClick={handleMenu} className={navBar ? " absolute left-0 top-0 w-full flex flex-col px-4 py-7 bg-gray-300/90" : "absolute left-[-100%]"}>
        <ul>
          <h1>Gwadar.</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destination</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
        </ul>
        {/* Buttons */}
        <div className="flex flex-col">
          <button className="my-4">Seach</button>
          <button>Account</button>
        </div>
        {/* Buttons End */}

        {/* Social Icons Start */}
        <div className="flex justify-between my-4">
          <BsFacebook className="icon" />
          <AiFillInstagram className="icon" />
          <AiFillLinkedin className="icon" />
          <AiFillTwitterSquare className="icon" />
          <AiFillYoutube className="icon" />
        </div>
        {/* Social icons End */}
      </div>
      {/* Mobile Screen Icons Start */}
    </div>
  );
};
