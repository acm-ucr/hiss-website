import React from "react";
import Image from "next/image";
import { GrMail } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Card = ({
  name,
  position,
  year,
  major,
  pronouns,
  linkedIn,
  email,
  image,
}) => {
  return (
    <div className="font-poppins m-4 p-3 bg-white w-64 rounded-3xl shadow flex flex-col items-start justify-center">
      <Image
        src={image}
        alt="Picture of the HiSS Board Member"
        className="w-full rounded-2xl object-cover aspect-square"
      />

      <div>
        <div className="mt-2 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple">
          {name}
        </div>

        <div className="-mt-0 text-xl font-light">{position}</div>

        <Link href={linkedIn} target="_blank">
          <FaLinkedinIn className="inline h-6 w-6 ml-2 mb-1 text-hiss-purple hover:scale-110 duration-200" />
        </Link>

        <Link href={email} target="_blank">
          <GrMail className="inline h-6 w-6 ml-2 mb-1 rounded-xl text-hiss-purple hover:scale-110 duration-200" />
        </Link>

        <div className="text-base">
          {year} - {major}
        </div>
        <div className="text-base">Pronouns: {pronouns}</div>
      </div>
    </div>
  );
};

export default Card;
