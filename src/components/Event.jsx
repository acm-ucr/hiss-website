import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const Event = ({
  month = "NOV",
  date = "9",
  time = "2:08 AM",
  title = "Event Name",
  link = "http://google.com",
  description = "Description goes here",
}) => {
  return (
    <div className="mt-4 ml-4 font-poppins bg-white rounded-xl w-8/12 h-36 gap-x-3  shadow flex flex-row items-start justify-left overflow-hidden">
      <div className="w-fit rounded-l-xl  bg-gradient-to-r from-hiss-blue to-hiss-purple">
        <div className="w-32 h-36 font-bold text-4xl text-white flex flex-col gap-y-1 items-center justify-center">
          <div>{month}</div>
          <div> {date}</div>
          <div className="font-extralight text-sm"> {time}</div>
        </div>
      </div>
      <div className="font-bold text-4xl flex flex-col gap-y-1 items-start justify-center">
        <div className="font-semibold text-4xl">
          {title}
          <div className="mt-2 font-light text-sm">
            {"zoom: "}
            <Link className="truncate" href={link}>
              link
              <FiExternalLink />
            </Link>
          </div>
        </div>
        <div className="mt-2 font-normal text-sm">{description}</div>
      </div>
    </div>
  );
};

export default Event;
