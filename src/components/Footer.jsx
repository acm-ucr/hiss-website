import React from "react";
import Link from "next/link";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-hiss-blue to-hiss-purple w-full p-4">
      <div className="flex items-center font-poppins font-bold text-3xl text-white">
        HiSS
        <div className="w-full max-h-full flex space-x-4 place-content-end ">
          <Link
            href="https://www.instagram.com/highlanderstatistics/"
            className="text-white hover:scale-110 duration-300"
            rel="noopener noreferrer"
            target="_blank"
          >
            {<FaInstagram className="text-2xl" />}
          </Link>

          <Link
            href="https://discord.gg/NrsJjtAQAE"
            className="text-white hover:scale-110 duration-300"
            rel="noopener noreferrer"
            target="_blank"
          >
            {<FaDiscord className="text-2xl" />}
          </Link>

          <Link
            href="mailto:highlanderstat@ucr.edu"
            className="text-white hover:scale-110 duration-300"
            rel="noopener noreferrer"
            target="_blank"
          >
            {<IoMail className="text-2xl" />}
          </Link>

          <Link
            href="https://www.linkedin.com/company/highlander-statistics-society"
            className="text-white hover:scale-110 duration-300"
            rel="noopener noreferrer"
            target="_blank"
          >
            {<FaLinkedin className="text-2xl" />}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
