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
    <div className="flex rounded-xl overflow-hidden shadow justify-center w-[95%] sm:w-[80%]">
      <div className="p-4 text-white text-center w-1/3 sm:w-1/4 bg-gradient-to-br from-hiss-blue to-hiss-purple">
        <div className="text-3xl sm:text-4xl font-bold">{month}</div>
        <div className="text-3xl sm:text-4xl font-semibold ">{day}</div>
        <div className="text-md sm:text-xl font-normal">{time}</div>
      </div>

      <div className="flex-1 pl-4">
        <p className="text-2xl font-bold mb-1 mt-1">{title}</p>
        <div className="flex items-center">
          <p className="flex m-0 p-0 font-normal">{location}</p>

          {link && (
            <Link className="text-hiss-black px-1 mb-0.5" href={link}>
              <FiExternalLink />
            </Link>
          )}
        </div>
        <p className="w-full focus:outline-none resize-none font-normal mt-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Event;
