import React from "react";
import { FaDiscord } from "react-icons/fa";

const Card = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-top pt-4 w-48 h-1/4 rounded-lg border-1 shadow-lg">
      <div className="space-y-1 flex flex-col items-center justify-center">
        <FaDiscord className="text-7xl" />
        <div className="bg-hiss-yellow h-2 w-2/6 rounded-lg" />
        <p className="mt-2 text-xl font-bold bg-gradient-to-r from-hiss-blue to-hiss-purple bg-clip-text text-transparent">
          Discord
        </p>
      </div>
      <button className="w-3/5 border-1 border-black bg-white rounded-full flex items-center justify-center mt-6">
        link
      </button>
    </div>
  );
};

export default Card;
