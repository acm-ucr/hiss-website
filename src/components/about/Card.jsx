import React from "react";
import { FaDiscord } from "react-icons/fa";

const Card = () => {
  return (
    <div className="bg-red-200 flex flex-col items-center justify-center w-40 h-1/5 rounded-lg">
      <FaDiscord className="text-4xl md:text-6xl" />
      <div className="bg-hiss-yellow h-2 w-1/6 rounded-lg" />
      <p className="text-xl bg-gradient-to-r from-hiss-blue to-hiss-purple bg-clip-text text-transparent">
        Discord
      </p>
      <button className="w-3/5 border-1 border-black bg-white rounded-full flex items-center justify-center">
        link
      </button>
    </div>
  );
};

export default Card;
