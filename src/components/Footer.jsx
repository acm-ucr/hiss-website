import React from "react";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import {IoMail} from "react-icons/io5";
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-hiss-blue to-hiss-purple w-full max-w-screen-xl mx-auto p-4 items-baseline">
      <div className="flex items-center font-poppins font-bold text-3xl text-white ">
        HISS
        <div className= " w-full max-h-full flex space-x-4 place-content-end">
        {<FaInstagram className="text-2xl" />} {<FaDiscord className="text-2xl" />} {<IoMail className="text-2xl" />}</div>
        </div> 
    </div>
  );
};

export default Footer;
