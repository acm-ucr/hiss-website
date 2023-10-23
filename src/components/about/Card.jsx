import Link from "next/link";
import React from "react";

const Card = ({ text, icon, link }) => {
  return (
    <div className="bg-white flex flex-col items-center justify-top pt-4 pb-12 w-48 h-1/4 rounded-lg border-1 shadow-lg">
      <div className="space-y-1 flex flex-col items-center justify-center">
        {icon}
        <div className="bg-hiss-yellow h-2 w-2/6 rounded-lg" />
        <p className="mt-2 text-xl font-bold bg-gradient-to-r from-hiss-blue to-hiss-purple bg-clip-text text-transparent">
          {text}
        </p>
      </div>
      <button className="w-3/5 border-1 border-black bg-white rounded-full flex items-center justify-center mt-6">
        <Link href={link} className="text-black no-underline">
          Join
        </Link>
      </button>
    </div>
  );
};

export default Card;
