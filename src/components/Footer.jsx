import React from "react";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-hiss-blue to-hiss-purple w-full p-4">
      <div className="flex items-center font-poppins font-bold text-3xl text-white">
        HISS
        <div className="w-full max-h-full flex space-x-4 place-content-end ">
          <a href="https://www.google.com/" className="text-white">
          {<FaInstagram className="text-2xl" />}{" "}
          </a>
          <a href="https://www.google.com/" className="text-white">
          {<FaDiscord className="text-2xl" />} 
          </a>
          <a href="https://www.google.com/" className="text-white">
          {<IoMail className="text-2xl" />}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
