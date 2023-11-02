import React from "react";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-hiss-blue to-hiss-purple w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between font-poppins font-bold text-3xl text-white ">
        HISS <FaInstagram />
      </div>
    </div>
  );
};

export default Footer;
