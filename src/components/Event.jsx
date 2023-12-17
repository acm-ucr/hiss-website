import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const Event = ({
  month = "",
  day = "",
  time = "",
  title = "",
  location = "",
  link = "http://google.com",
  description = "",
}) => {
  return (
    <div className="bg-white flex rounded-xl overflow-hidden shadow w-11/12 md:w-3/4 lg:w-1/2">
      <div className="flex flex-col justify-center items-center text-white text-center w-1/4 bg-gradient-to-br from-hiss-blue to-hiss-purple">
        <div className="text-3xl md:text-4xl font-bold">{month}</div>
        <div className="text-3xl md:text-4xl font-semibold ">{day}</div>
        <div className="text-xl font-normal">{time}</div>
      </div>

      <div className="flex-1 px-3">
        <p className="text-2xl font-bold mb-1 mt-1">{title}</p>
        <div className="flex items-center">
          <p className="flex m-0 p-0 font-normal">{location}</p>

          {link && (
            <Link className="text-hiss-black px-1 mb-0.5" href={link}>
              <FiExternalLink />
            </Link>
          )}
        </div>
        <p className="w-full focus:outline-none resize-none font-normal text-sm md:text-base my-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Event;
