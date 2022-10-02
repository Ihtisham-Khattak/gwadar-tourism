import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="max-w-[1420px] flex flex-col mx-auto px-4 py-16 bg-gray-600">
      <div className="sm:flex justify-between items-center text-center">
        <h1>Gwadar.</h1>
        <div className="flex justify-between my-5 sm:max-w-[280px]">
          <ul>

         
            <li> <BsFacebook className="icon" /></li>
            <li><AiFillInstagram className="icon" /></li>
            <li>   <AiFillLinkedin className="icon" /></li>
            <li> <AiFillTwitterSquare className="icon" /></li>
            <li> <AiFillYoutube className="icon" /></li>
          </ul>
          
       
         
         
        </div>
      </div>
      <div className="flex justify-between">
        <ul>
          <li>About</li>
          <li>Partnership</li>
          <li>Careers</li>
          <li>Newspapers</li>
          <li>Advertising</li>
        </ul>

        <ul>
          <li>About</li>
          <li>Partnership</li>
          <li>Careers</li>
          <li>Newspapers</li>
          <li>Advertising</li>
        </ul>
      </div>
      <div className="flex flex-col justify-evenly text-left">
        <label className="text-white">Subscribe for daily updates</label>
        <input type='email' placeholder='Email Address' className="w-[12rem] h-full rounded-md outline-none" />
      </div>
    </div>
  );
};

export default Footer;
